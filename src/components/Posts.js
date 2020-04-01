import React from 'react'
import Post from './Post'
import styled from 'styled-components'

const StyledList = styled.ul`
    border: 1px solid #f1f1f1;
    border-radius: 4px;
`

const Posts = (props) => {
    let { subreddit } = props

    return (
        <StyledList>
            { subreddit.items && subreddit.items.map(item => (
                <Post key={item.id} post={item} />
            ))}
        </StyledList>
    )
}

export default Posts