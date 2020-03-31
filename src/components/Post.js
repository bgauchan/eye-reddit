import React from 'react'
import styled from 'styled-components'

const StyledListItem = styled.li`
    display: flex;
    margin: 0.8rem 0;
`

const StyledLink = styled.a`
    display: block;
    line-height: 1.75rem;
    padding-left: 1rem;
    text-decoration: none;

    :visited {
        color: #adadad;
    }

    :hover {
        text-decoration: underline;
    }
`

const StyledScoreDiv = styled.div`
    background: khaki;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 1.8rem;
    font-size: 0.75rem;
    height: 1.8rem;
`

const Post = (props) => {
    let { post } = props
    let url = 'https://old.reddit.com/' + post.permalink

    return (
        <StyledListItem>
            <StyledScoreDiv>
                { post.score }
            </StyledScoreDiv>
            <StyledLink href={url} target='_blank'>
                { post.title }
            </StyledLink>
        </StyledListItem>
    )
}

export default Post