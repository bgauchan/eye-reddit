import posts from './posts'
import selectedSubreddit from './selectedSubreddit'
import { readPostIDs, readPosts } from './readPosts'
import subscriptions from './subscriptions'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    subscriptions,
    readPostIDs,
    readPosts,
    posts,
    selectedSubreddit,
})

export default rootReducer