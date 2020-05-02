import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { markPostAsRead } from '../actions'

const StyledListItem = styled.li`
    border-top: 1px solid #f1f1f1;
    display: flex;
    margin: 0.8rem 0;
    padding: 15px 15px 2px;

    &:first-child {
        border-top: 0;
        padding-top: 5px;
    }

    .score {
        background: khaki;
        border-radius: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 1.8rem;
        font-size: 0.75rem;
        height: 1.8rem;
    }
`

const StyledLink = styled.a`
    display: block;
    font-size: 1.05rem;
    letter-spacing: -0.01rem;
    line-height: 1.35rem;
    margin-bottom: 0.4rem;
    text-decoration: none;

    :visited {
        color: #8e8d8d;
    }
`

const StyledInfoDiv = styled.div`
    font-size: 0.8rem;
    padding-left: 1rem;

    .submitted_info {
        color: grey;
        display: inline-block;
        font-size: 0.7rem;
        font-style: italic;
        margin-left: 0.5rem;
    }
`
const StyledGenericLink = styled.a`
    color: orchid;
    text-decoration: none;

    :hover {
        text-decoration: underline;
    }
`
const StyledUserProfileLink = styled(StyledGenericLink)`
    color: #0720ab;
    margin-left: 0.2rem;
`
const StyledSubredditLink = styled(StyledGenericLink)`
    color: grey;
    font-size: 0.7rem;
    margin-left: 0.4rem;
`

const timeDifference = (postCreatedTime) => {
    let diff = Date.now() - new Date(postCreatedTime * 1000)
    var daysDifference = Math.floor(diff / 1000 / 60 / 60 / 24)
    diff -= daysDifference * 1000 * 60 * 60 * 24

    let hoursDifference = Math.floor(diff/1000/60/60)
    diff -= hoursDifference * 1000 * 60 * 60

    let minutesDifference = Math.floor(diff / 1000 / 60)
    diff -= minutesDifference * 1000 * 60

    let secondsDifference = Math.floor(diff/1000);

    if(daysDifference === 1) {
        return daysDifference + ' day ago'
    } 
    
    if(daysDifference > 0) {
        return daysDifference + ' days ago'
    }

    if(daysDifference < 1) {
        if(hoursDifference === 1) {
            return hoursDifference + ' hour ago'
        } else {
            return hoursDifference + ' hours ago'
        }
    }

    if(hoursDifference < 1) {
        if(minutesDifference === 1) {
            return minutesDifference + ' min ago'
        } else {
            return minutesDifference + ' mins ago'
        }
    }

    if(minutesDifference < 60) {        
        return secondsDifference + ' secs ago'
    }

    return ''
}

class Post extends Component {
    markPostAsRead(postID) {
        this.props.dispatch(markPostAsRead(postID))
    }
    render() {
        let { post } = this.props
        let domain = 'https://old.reddit.com/'
        let url = domain + post.permalink
        let submittedTimeAgo = timeDifference(post.created_utc)
        let userProfileUrl = domain + post.author
        let subredditUrl = domain + post.subreddit_name_prefixed

        return (
            <StyledListItem data-post-id={post.id} onClick={() => this.markPostAsRead(post.id)}>
                <div className="score">{ post.score }</div>
                <StyledInfoDiv>
                    <StyledLink href={url} target='_blank'>
                        { post.title }
                    </StyledLink>
                    <StyledGenericLink href={url} target='_blank'>
                        { post.num_comments } comments
                    </StyledGenericLink>
                    <div className='submitted_info'>
                        Submitted { submittedTimeAgo } by 
                        <StyledUserProfileLink href={userProfileUrl} target='_blank'>{ post.author } </StyledUserProfileLink>
                        on
                    </div>
                    <StyledSubredditLink className='subreddit_name' href={subredditUrl} target='_blank'>
                        { post.subreddit_name_prefixed }
                    </StyledSubredditLink>
                </StyledInfoDiv>
            </StyledListItem>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
	readPosts: state.readPosts
})

export default connect(mapStateToProps)(Post)
