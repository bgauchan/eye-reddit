import React from 'react'
import Post from './Post'

const Posts = (props) => {
    let { subreddit } = props

    return (
        <ul>
            { subreddit.items && subreddit.items.map(item => (
                <Post key={item.id} post={item} />
            ))}
        </ul>
    )
}

export default Posts