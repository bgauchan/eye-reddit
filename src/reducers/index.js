import posts from './posts'
import selectedSubreddit from './selectedSubreddit'
import readPostIDs from './readPosts'
import subscriptions from './subscriptions'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    subscriptions,
    readPostIDs,
    posts,
    selectedSubreddit,
})

export default rootReducer