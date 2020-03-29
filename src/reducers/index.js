import postsBySubreddit from './postsBySubreddit'
import selectedSubreddit from './selectedSubreddit'
import { combineReducers } from 'redux'

const reducers = combineReducers({
    postsBySubreddit,
    selectedSubreddit,
})

export default reducers