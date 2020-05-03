import React from 'react'
import Post from './Post'
import styled from 'styled-components'

const StyledList = styled.ul`
    border: 1px solid #f1f1f1;
    border-radius: 4px;
`

const Posts = (props) => {
    let { posts } = props

    return (
        <StyledList>
            { posts.items && posts.items.map(item => (
                <Post key={item.id} post={item} />
            ))}
        </StyledList>
    )
}

export default Posts