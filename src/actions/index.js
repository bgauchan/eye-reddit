
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const MARK_POST_AS_READ = 'MARK_POST_AS_READ'

export function selectSubreddit(subreddit) {
    return { type: SELECT_SUBREDDIT, subreddit }
}

export function invalidateSubreddit(subreddit) {
    return { type: INVALIDATE_SUBREDDIT, subreddit}
}

export function markPostAsRead(postID) {
    return {
        type: MARK_POST_AS_READ,
        postID
    }
}

function requestPosts(subreddit) {
    return { type: REQUEST_POSTS, subreddit }
}

function receivePosts(subreddit, json) {
    return {
        type: RECEIVE_POSTS,
        subreddit,
        posts: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    }
}

function fetchPosts(subreddit) {
    return function(dispatch) {
        dispatch(requestPosts(subreddit))

        return (
            fetch(`https://www.reddit.com/r/${subreddit}.json?limit=25`)
            .then(res => res.json())
            .then(json => dispatch(receivePosts(subreddit, json)))
        )
    }
}

function shouldFetchPosts(state, subreddit) {
    const posts = state.postsBySubreddit[subreddit]

    if (!posts) {
        return true
    } else if (posts.isFetching) {
        return false
    } else {
        return posts.didInvalidate
    }
}

export function fetchPostsIfNeeded(subreddit) {
    // This is useful for avoiding a network request if
    // a cached value is already available.
    return (dispatch, getState) => {
        if (shouldFetchPosts(getState(), subreddit)) {         
            console.log('fetching posts...')
            return dispatch(fetchPosts(subreddit))
        } else {
            console.log('no need to fetch')
            return Promise.resolve()
        }
    }
}