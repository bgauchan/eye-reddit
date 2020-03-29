
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export function selectSubreddit(subreddit) {
    return { type: SELECT_SUBREDDIT, subreddit }
}

export function invalidateSubreddit(subreddit) {
    return { type: INVALIDATE_SUBREDDIT, subreddit}
}

export function requestPosts(subreddit) {
    return { type: REQUEST_POSTS, subreddit }
}

export function receivePosts(subreddit, json) {
    return {
        type: RECEIVE_POSTS,
        subreddit,
        posts: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    }
}

export function fetchPosts(subreddit) {
    return function(dispatch) {
        dispatch(requestPosts(subreddit))

        return (
            fetch(`https://www.reddit.com/r/${subreddit}.json?limit=25`)
            .then(res => res.json())
            .then(json => dispatch(receivePosts(subreddit, json)))
        )
    }
}