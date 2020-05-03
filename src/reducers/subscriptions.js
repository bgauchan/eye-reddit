import { ADD_SUBSCRIPTION, RECEIVE_SUBSCRIPTIONS } from '../actions'
  
const subscriptions = (state = [], action) => {
    switch (action.type) {
        case ADD_SUBSCRIPTION:
            return [...state, action.subreddit]
        case RECEIVE_SUBSCRIPTIONS:
            return action.subscriptions ? [...state, ...action.subscriptions] : []
        default:
            return state
    }
}

export default subscriptions