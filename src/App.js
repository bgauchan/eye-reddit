import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import ListOfPosts from './components/ListOfPosts'

const StyledMainHeader = styled.h1`
	margin-block-start: 0;
`

function App(props) {
	return (
		<div className="App">
			<header className="">
				<StyledMainHeader>All Posts</StyledMainHeader>
			</header>
			<main>
				<ListOfPosts />
			</main>
		</div>
	)
}

const mapStateToProps = (state, ownProps) => ({
	selectedSubreddit: state.selectedSubreddit
})

export default connect(
	mapStateToProps,
	// mapDispatchToProps
)(App)
