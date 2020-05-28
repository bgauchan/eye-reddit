import React from 'react'
import Post from './Post'
import styled from 'styled-components'

const StyledList = styled.ul`
    background: white;
    border: 1px solid #f1f1f1;
    border-radius: 6px;
`

const StyledEmptyState = styled.div`
	border: 1px solid #eaeaea;
	border-radius: 6px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	flex: 1;
	font-size: 18px;

	i {
		font-size: 30px;
		margin-bottom: 20px;
	}
`

const Posts = (props) => {
    let { posts } = props

    return (
        <StyledList>
            { posts.items.length > 0 && posts.items.map(item => (
                <Post key={item.id} post={item} />
            ))}

            { posts.items.length < 1 && (
                <StyledEmptyState>
                    <i className="far fa-sad-tear"></i>
                    <span>Sorry, can't find any posts</span>
                </StyledEmptyState>
            )}
        </StyledList>
    )
}

export default Posts