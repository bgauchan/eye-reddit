import db from '../firebase'

export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

const readPostsDoc = db.collection('iisbardan').doc('readPosts')
const subscriptionsDoc = db.collection('iisbardan').doc('subscriptions')

export function selectSubreddit(subreddit) {
    return (dispatch) => {
        dispatch({ type: SELECT_SUBREDDIT, subreddit })
        dispatch(fetchPostsIfNeeded(subreddit))
    }
}

export function invalidateSubreddit(subreddit) {
    return { type: INVALIDATE_SUBREDDIT, subreddit}
}

// -------------------- READ POSTS ------------------------

export const MARK_POST_AS_READ = 'MARK_POST_AS_READ'
export const REQUEST_READ_POSTS = 'REQUEST_READ_POSTS'
export const RECEIVE_READ_POSTS = 'RECEIVE_READ_POSTS'

function postRead(postID) {
    return {
        type: MARK_POST_AS_READ,
        postID
    }
}

export function markPostAsRead(post) {
    return (dispatch, getState) => {
        const state = getState()
        let readPostIDs = state.readPostIDs
        let readPosts = state.readPosts || []

        // post already exists in state, then ignore it bcoz
        // it means, it was read already
        if(readPostIDs.includes(post.id)) {
            return
        } else {
            // make sure the array never goes above 50
            readPostIDs = readPostIDs.slice(readPostIDs.length - 49, readPostIDs.length + 49)

            if(readPosts.length > 50) {
                readPosts = readPosts.slice(readPosts.length - 49, readPosts.length + 49)
            }
        }

        readPostsDoc.set({
            ids: [...readPostIDs, post.id],
            posts: [...readPosts, post]
        })
        .then(() => {
            dispatch(postRead(post.id))
        })
        .catch((error) => console.error("Firebase: error adding document: ", error))    
    }
}

function requestReadPosts(subreddit) {
    return { type: REQUEST_READ_POSTS, subreddit }
}

function receiveReadPosts(subreddit, data) {
    return {
        type: RECEIVE_READ_POSTS,
        subreddit,
        ids: data.ids,
        receivedAt: Date.now()
    }
}

export function fetchReadPosts(subreddit) {
    return function(dispatch) {
        dispatch(requestReadPosts(subreddit))

        return (
            readPostsDoc.get().then((doc) => {
                if (doc.exists) {
                    dispatch(receiveReadPosts(subreddit, doc.data()))
                } else {
                    console.log("No such document!")
                }
            }).catch((error) => console.log("Error getting document:", error))
        )
    }
}

// -------------------- SUBSCRIPTIONS ------------------------

export const ADD_SUBSCRIPTION = 'ADD_SUBSCRIPTION'
export const REQUEST_SUBSCRIPTIONS = 'REQUEST_SUBSCRIPTIONS'
export const RECEIVE_SUBSCRIPTIONS = 'RECEIVE_SUBSCRIPTIONS'

function requestSubscriptions() {
    return { type: REQUEST_SUBSCRIPTIONS }
}

function receiveSubscriptions(data) {
    return {
        type: RECEIVE_SUBSCRIPTIONS,
        subscriptions: data.names ? [...data.names] : [],
        receivedAt: Date.now()
    }
}

export function fetchSubscriptions() {
    return function(dispatch) {
        dispatch(requestSubscriptions())

        return (
            subscriptionsDoc.get().then((doc) => {                
                if (doc.exists) {
                    dispatch(receiveSubscriptions(doc.data()))
                    dispatch(fetchPostsIfNeeded('all'))
                } else {
                    console.log("No such document!")
                }
            }).catch((error) => console.log("Error getting document:", error))
        )
    }
}

export function addSubscription(subreddit) {
    return function(dispatch, getState) {
        let { subscriptions } = getState()

        // already subscribed, no need to add again
        if(subscriptions.includes(subreddit)) return

        let subscriptionUpdate = {
            names: [...subscriptions, subreddit]
        }
        
        subscriptionsDoc.set(subscriptionUpdate)
        .then(() => {
            dispatch({  
                type: ADD_SUBSCRIPTION,
                subreddit
            })

            dispatch(fetchPostsIfNeeded('all')) 
        }).catch((error) => console.log("Error getting document:", error))
    }
}

// -------------------- FETCHING POSTS -----------------------

function requestPosts(subreddit) {
    return { 
        type: REQUEST_POSTS, 
        subreddit,
        isFetching: true
    }
}

function receivePosts(subreddit, json) {
    return {
        type: RECEIVE_POSTS,
        subreddit,
        posts: json.data.children.map(child => child.data),
        receivedAt: Date.now(),
        isFetching: false
    }
}

function fetchPosts(subreddit) {
    return function(dispatch, getState) {
        let url = ''
        let { subscriptions } = getState()
        
        if(subreddit === 'all')  {
            url = 'https://www.reddit.com/r/'
            subscriptions.forEach(name => url += (name + '+'))
            url += '/hot.json?limit=50'
        } else {
            url = `https://www.reddit.com/r/${subreddit}/hot.json?limit=50`
        }
        
        dispatch(requestPosts(subreddit))

        return (
            fetch(url)
            .then(res => res.json())
            .then(json => dispatch(receivePosts(subreddit, json)))
        )
    }
}

function shouldFetchPosts(state, subreddit) {
    // in the future, we need to load from cache first if possible,
    // then fetch if either its not in cache or certain amount of time
    // has expired
    return true
}

export function fetchPostsIfNeeded(subreddit) {
    // This is useful for avoiding a network request if
    // a cached value is already available.
    return (dispatch, getState) => {
        if (shouldFetchPosts(getState())) {   
            return dispatch(fetchPosts(subreddit))
        } else {
            return Promise.resolve()
        }
    }
}