import { SELECT_SUBREDDIT } from '../actions'
  
const selectedSubreddit = (state = 'all', action) => {
    switch (action.type) {
        case SELECT_SUBREDDIT:
            return action.subreddit
        default:
            return state
    }
}

export default selectedSubreddit