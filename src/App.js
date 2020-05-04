import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Posts from './components/Posts'
import SelectDropdown from './components/SelectDropdown'
import LoadingView from './components/LoadingView'

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

function App(props) {
	return (
		<div className="App">
			<StyledMainHeader>
				<h1>All Posts</h1>
				<SelectDropdown />
			</StyledMainHeader>
			<main>
				{ props.fetching && <LoadingView /> }

				{ !props.fetching && <Posts posts={props.posts} /> }
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
