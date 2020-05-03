import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Posts from './components/Posts'
import SelectDropdown from './components/SelectDropdown'

const StyledMainHeader = styled.header`
	display: flex;
	align-items: flex-end;
	margin-bottom: 30px;
	
	h1 {
		flex: 1;
		margin-block-start: 0;
		margin-block-end: 0;
	}
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

function App(props) {
	return (
		<div className="App">
			<StyledMainHeader className="">
				<h1>All Posts</h1>
				<SelectDropdown />
			</StyledMainHeader>
			<main>
				{ props.postsExists && <Posts posts={props.posts} /> }

				{ !props.postsExists && (
					<StyledEmptyState>
						<i className="far fa-sad-tear"></i>
						<span>Sorry, can't find any posts</span>
					</StyledEmptyState>
				)}
			</main>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		posts: state.posts,
		selectedSubreddit: state.selectedSubreddit,
		postsExists: state.posts.items.length > 0 ? true : false
	}
}

export default connect(
	mapStateToProps,
)(App)
