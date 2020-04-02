import { MARK_POST_AS_READ } from '../actions'
  
const readPosts = (state = [], action) => {
    switch (action.type) {
        case MARK_POST_AS_READ:
            if(!state.includes(action.postID)) {
                return [...state, action.postID]
            }
        default:
            return state
    }
}

export default readPosts