import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import ListOfPosts from './components/ListOfPosts'
import SelectDropdown from './components/SelectDropdown'

const StyledMainHeader = styled.header`
	display: flex;
	align-items; center;
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
			<StyledMainHeader className="">
				<h1>All Posts</h1>
				<SelectDropdown />
			</StyledMainHeader>
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
