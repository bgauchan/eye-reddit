import React from 'react'

const Post = (props) => {
    let { post } = props

    return (
        <li>
            { post.title }
        </li>
    )
}

export default Post