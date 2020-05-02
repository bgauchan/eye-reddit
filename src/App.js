import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import ListOfPosts from './components/ListOfPosts'
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
	border: 1px solid #f1f1f1;
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
				{ props.postsExists && <ListOfPosts /> }

				{ !props.postsExists && (
					<StyledEmptyState>
						<i class="far fa-sad-tear"></i>
						<span>Sorry, can't find any posts</span>
					</StyledEmptyState>
				)}
			</main>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		selectedSubreddit: state.selectedSubreddit,
		postsExists: Object.keys(state.postsBySubreddit).length > 0 ? true : false
	}
}

export default connect(
	mapStateToProps,
	// mapDispatchToProps
)(App)
