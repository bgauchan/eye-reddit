import React from 'react'
import './App.css'
import { connect } from 'react-redux'

function App(props) {
	return (
		<div className="App">
			<header className="">
				<h1>{ props.selectedSubreddit }</h1>
			</header>
			<main>
				{ props.postsBySubreddit 
					&& props.subredditKeys.map(key => (
						<span key={key}>{ key }</span>
					))
				}
			</main>
		</div>
	)
}

const mapStateToProps = (state, ownProps) => ({
	subredditKeys: Object.keys(state.postsBySubreddit),
	postsBySubreddit: state.postsBySubreddit,
	selectedSubreddit: state.selectedSubreddit
})

export default connect(
	mapStateToProps,
	// mapDispatchToProps
)(App)
