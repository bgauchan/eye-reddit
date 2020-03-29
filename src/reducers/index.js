import postsBySubreddit from './postsBySubreddit'
import selectedSubreddit from './selectedSubreddit'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    postsBySubreddit,
    selectedSubreddit,
})

export default rootReducer