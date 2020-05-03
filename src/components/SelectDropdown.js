import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const StyledDropdown = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 42px;
    font-size: 15px;
    min-width: 280px;
    position: relative;

    .fa-reddit {
        font-size: 28px;
    }

    .add_subreddit_icon {
        position: relative;
        margin-right: 25px;

        &:hover {
            color: blue;
        }

        .fa-plus {
            font-size: 10px;
            position: absolute;
            top: 2px;
            right: -10px;
        }
    }

    .selected {
        border: 1px solid lightgrey;
        border-radius: 6px;
        display: flex;
        align-items: center;
        flex: 1;
        height: 100%;
        margin: 0;
        padding: 0 15px;

        &:hover {
            color: orchid;
        }

        &:hover + ul {
            opacity: 1;
        }

        span {
            flex: 1;
        }
    }

    ul {
        background: #1f1f1e;
        border-radius: 6px;
        box-shadow: 0 2px 6px rgba(0,0,0,0.8);
        color: white;
        opacity: 0;
        padding: 6px 0;
        position: absolute;
        top: 44px;
        right: 0;
        transition: opacity 200ms linear;
        width: 225px;

        &:empty {
            display: none;
        }
    }

    li {
        padding: 8px 15px;

        &:hover {
            color: orchid;
        }
    }

    .add_subreddit_box {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        transition: display 800ms;

        input[type=text] {
            outline: none;
            height: 100%;
            border-radius: 6px;
            font-size: 15px;
            border: 1px solid blue;
            padding: 0 15px;
        }

        i {
            color: white;
            font-size: 16px;
            margin-left: 25px;
            position: relative;

            &:after {
                content: '';
                height: 28px;
                width: 28px;
                background: #f44336;
                position: absolute;
                z-index: -1;
                left: -9px;
                top: -6px;
                border-radius: 20px;
            }

            &.fa-check {
                &:before {
                    position: relative;
                    left: -2px;
                    font-size: 15px;
                }

                &:after {
                    background: #59ce5e;
                }
            }
        }
    }
`

class SelectDropdown extends Component {
    state = {
        addSubreddit: false
    }
    addSubreddit() {
        this.setState({ addSubreddit: true })
    }
    saveSubreddit() {
        this.setState({ addSubreddit: false })
    }
    cancelSubreddit() {
        this.setState({ addSubreddit: false })
    }
    render() {
        let { subredditNames, selectedSubreddit } = this.props
        
        return (
            <StyledDropdown>
                { this.state.addSubreddit && (
                    <div className="add_subreddit_box">
                        <input type="text" />
                        <i className="fas fa-times" onClick={() => this.cancelSubreddit()}></i>
                        <i className="fas fa-check" onClick={() => this.saveSubreddit()}></i>
                    </div>
                )}

                { !this.state.addSubreddit && (
                    <React.Fragment>
                        <div className="add_subreddit_icon" onClick={() => this.addSubreddit()}>
                            <i className="fas fa-plus"></i>
                            <i className="fab fa-reddit"></i>
                        </div>

                        <div className="selected">
                            <span>{ selectedSubreddit === 'all' ? 'Show All' : ('/r' + selectedSubreddit) }</span>
                            <i className="fas fa-chevron-down"></i>
                        </div>
                        
                        { subredditNames && (
                            <ul>
                                { subredditNames.map(name => (						
                                    <li key={name}>{ name }</li>
                                ))}
                            </ul>
                        )}
                    </React.Fragment>
                )}
            </StyledDropdown>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    subredditNames: Object.keys(state.postsBySubreddit),
    selectedSubreddit: state.selectedSubreddit
})

export default connect(
	mapStateToProps,
)(SelectDropdown)