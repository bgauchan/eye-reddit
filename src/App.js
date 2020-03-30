import React from 'react'
import './App.css'
import { connect } from 'react-redux'
import ListOfPosts from './components/ListOfPosts'

function App(props) {
	return (
		<div className="App">
			<header className="">
				<h1>{ props.selectedSubreddit }</h1>
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
