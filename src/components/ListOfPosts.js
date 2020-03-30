import React, { Component } from 'react'
import { connect } from 'react-redux'
import Posts from './Posts'

class ListOfPosts extends Component {
    render() {
        let subreddits = this.props.postsBySubreddit
        
        return (
            <div>
               { subreddits
					&& this.props.names.map(name => (						
                        <Posts key={name} subreddit={subreddits[name]} />
					))
				}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
	names: Object.keys(state.postsBySubreddit),
	postsBySubreddit: state.postsBySubreddit,
	selectedSubreddit: state.selectedSubreddit
})

export default connect(
	mapStateToProps,
	// mapDispatchToProps
)(ListOfPosts)