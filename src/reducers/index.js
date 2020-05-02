import postsBySubreddit from './postsBySubreddit'
import selectedSubreddit from './selectedSubreddit'
import readPosts from './readPosts'
import subscriptions from './subscriptions'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    subscriptions,
    readPosts,
    postsBySubreddit,
    selectedSubreddit,
})

export default rootReducer