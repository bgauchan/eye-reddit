import { MARK_POST_AS_READ, RECEIVE_READ_POSTS } from '../actions'
  
export const readPostIDs = (state = [], action) => {
    switch (action.type) {
        case MARK_POST_AS_READ:
            return [...state, action.post.id]
        case RECEIVE_READ_POSTS:            
            return action.ids || []
        default:
            return state
    }
}
  
export const readPosts = (state = [], action) => {
    switch (action.type) {
        case MARK_POST_AS_READ:
            return [...state, action.post]
        case RECEIVE_READ_POSTS:            
            return action.posts || []
        default:
            return state
    }
}