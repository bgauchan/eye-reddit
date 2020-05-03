import posts from './posts'
import selectedSubreddit from './selectedSubreddit'
import readPosts from './readPosts'
import subscriptions from './subscriptions'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    subscriptions,
    readPosts,
    posts,
    selectedSubreddit,
})

export default rootReducer