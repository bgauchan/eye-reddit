import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Posts from './components/Posts'
import SelectDropdown from './components/SelectDropdown'
import LoadingView from './components/LoadingView'

const StyledMainHeader = styled.header`
	background: #0f2b4d;
	color: white;
	display: flex;
	align-items: flex-end;
	padding: 40px 40px 100px;
	
	h1 {
		flex: 1;
		margin-block-start: 0;
		margin-block-end: 0;
	}
`

const StyledSidebar = styled.aside`
	display: flex;
	flex-direction: column;
	padding: 0 30px;

	h2 {
		color: #0f2b4d;
		font-family: 'Rammetto One', cursive;
		font-size: 20px;
		text-align: center;
	}

	ul {
		border-bottom: 1px solid #F2F2F2;
		border-top: 1px solid #F2F2F2;
		padding: 5px 10px;
	}

	i {
		width: 25px;
	}

	li {
		cursor: pointer;
		margin: 20px 0;
	}

	a {
		color: grey;
		text-decoration: none;
		margin: 8px 0;

		&:hover {
			text-decoration: underline;
		}
	}

    .add_subreddit_icon {
		font-size: 14px;
		margin: 20px 0 40px;
		width: 100%;
		
		i {
			font-size: 18px;
			margin-right: 5px;
			transform: translateY(2px);
			width: auto;
		}
	}
	
	.links {
		display:flex;
		flex-direction: column;
		margin-top: 30px;
		padding: 0 10px;
	}

	.go_home_link {
		margin: auto 0 30px;
		padding: 0 10px;
	}
`

const StyledRightSide = styled.div`
	flex: 0 0 360px;
	margin-left: 30px;
	
	section {
		background: white;
		border: 1px solid #f1f1f1;
		border-radius: 6px;
		margin-bottom: 30px;
		min-height: 100px;
	}
`

function App(props) {
	return (
		<div className="App">
			<StyledSidebar>
				<h2>EyeReddit</h2>
				<button className="add_subreddit_icon">
					<i className="fab fa-reddit"></i>
					<span>Add Subreddit</span>
				</button>
				<ul>
					<li>
						<i className="far fa-newspaper"></i>
						<span>All Posts</span>
					</li>
					<li>
						<i className="far fa-bookmark"></i>
						<span>Bookmarks</span>
					</li>
				</ul>
				
				<div className="links">
					<a href="https://old.reddit.com/message/inbox/" target="_blank">
						<i className="far fa-envelope"></i>
						<span>Messages</span>
					</a>
					<a href="https://old.reddit.com/prefs/" target="_blank">
						<i className="far fa-comment"></i>
						<span>Chat</span>
					</a>
					<a href="https://old.reddit.com/chat/" target="_blank">
						<i className="fas fa-sliders-h"></i>
						<span>Preferences</span>
					</a>
				</div>

				<a href="/" className="go_home_link">
					<i className="fas fa-home"></i>
					<span>Go Home</span>
				</a>
			</StyledSidebar>
			<main>
				<StyledMainHeader>
					<h1>All Posts</h1>
					<SelectDropdown />
				</StyledMainHeader>
				<section className="content">
					{ props.fetching && <LoadingView /> }

					{ !props.fetching && (
						<React.Fragment>
							<Posts posts={props.posts} /> 
							<StyledRightSide>
								<section className="recently_visited">

								</section>
								<section className="recent_favs">
									
								</section>
							</StyledRightSide>
						</React.Fragment>
					)}
				</section>
			</main>
		</div>
	)
}

const mapStateToProps = (state) => {
	let props = {
		posts: state.posts,
		selectedSubreddit: state.selectedSubreddit,
		fetching: state.posts.isFetching
	}

	return props
}

export default connect(
	mapStateToProps,
)(App)
