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

const StyledRightSide = styled.div`
	flex: 0 0 360px;
	margin-left: 30px;
	
	section {
		background: white;
		border: 1px solid #f1f1f1;
		border-radius: 4px;
		margin-bottom: 30px;
		min-height: 100px;
	}
`

function App(props) {
	return (
		<div className="App">
			<aside>

			</aside>
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
