import React from 'react'
import styled from 'styled-components'

const StyledView = styled.ul`
    background: white;
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    width: 100%;

    li {    
        border-top: 1px solid #f1f1f1;
        display: flex;
        margin: 0.8rem 0;
        padding: 15px 18px 0 15px;

        &:first-child {
            border-top: 0;
            padding-top: 5px;
        }

        & > div:not(.score) {
            flex: 1;
            padding-left: 15px;
        }

        span {
            display: block;
            margin-bottom: 8px;
        }
    }

    .score {
        border-radius: 2rem;
        height: 2.2rem;
        width: 2.2rem;
    }

    .title {
        height: 12px;
        width: 100%;
    }

    .comments {
        display: inline-block;
        height: 8px;
        width: 300px;
        vertical-align: top;
    }

    .submitted_info {
        display: inline-block;
        height: 8px;
        width: 170px;
        margin-left: 20px;
        vertical-align: top;
    }

    .shimmer {
        -webkit-animation-duration: 1s;
        -webkit-animation-fill-mode: forwards;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-name: placeHolderShimmer;
        -webkit-animation-timing-function: linear;
        background: #f6f7f9;
        background-image: linear-gradient(to right, #f6f7f9 0%, #e9ebee 20%, #f6f7f9 40%, #f6f7f9 100%);
        background-repeat: no-repeat;
        background-size: 800px 104px;
        position: relative;
    }

    @keyframes placeHolderShimmer {
        0% {
            background-position: -468px 0;
        }
        100% {
            background-position: 468px 0;
        }
    }
`

const StyledRightSide = styled.div`
	flex: 0 0 360px;
	margin-left: 30px;
	
	section {
		background: white;
		border: 1px solid #f1f1f1;
		border-radius: 6px;
		margin-bottom: 30px;
		min-height: 100px;
		padding: 20px 20px 15px;
	}

	h4 {
        height: 20px;
        width: 200px;
        margin: 0 0 15px;
    }
    
    div {
        border-top: 1px solid #f5f4f4;
        margin-top: 10px;
        padding-top: 10px;
    }

	span {
		display: block;
        height: 6px;
        margin-bottom: 8px;
        padding-top: 10px;
	}

    .shimmer {
        -webkit-animation-duration: 1s;
        -webkit-animation-fill-mode: forwards;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-name: placeHolderShimmer;
        -webkit-animation-timing-function: linear;
        background: #f6f7f9;
        background-image: linear-gradient(to right, #f6f7f9 0%, #e9ebee 20%, #f6f7f9 40%, #f6f7f9 100%);
        background-repeat: no-repeat;
        background-size: 800px 104px;
        position: relative;
    }

    @keyframes placeHolderShimmer {
        0% {
            background-position: -468px 0;
        }
        100% {
            background-position: 468px 0;
        }
    }
`

const fakeArray = [...Array(10)]

const LoadingView = () => {
    return (
        <React.Fragment>
            <StyledView>
                { fakeArray.map((a, i) => (
                    <li key={i}>
                        <div className="score shimmer"></div>
                        <div>
                            <span className="title shimmer"></span>
                            <span className="title shimmer"></span>
                            <span className="comments shimmer"></span>
                            <div className="submitted_info shimmer"></div>
                        </div>
                    </li>
                ))}
            </StyledView>
            <StyledRightSide>
                <section className="recently_visited">
                    <h4 className="shimmer"> </h4>
                    <div>
                        <span className="title shimmer"></span>
                        <span className="title shimmer"></span>
                        <span className="comments shimmer"></span>
                    </div>
                    <div>
                        <span className="title shimmer"></span>
                        <span className="title shimmer"></span>
                        <span className="comments shimmer"></span>
                    </div>
                    <div>
                        <span className="title shimmer"></span>
                        <span className="title shimmer"></span>
                        <span className="comments shimmer"></span>
                    </div>
                </section>
                <section className="recent_bookmarks">
                    <h4 className="shimmer"> </h4>
                    <div>
                        <span className="title shimmer"></span>
                        <span className="title shimmer"></span>
                        <span className="comments shimmer"></span>
                    </div>
                    <div>
                        <span className="title shimmer"></span>
                        <span className="title shimmer"></span>
                        <span className="comments shimmer"></span>
                    </div>
                    <div>
                        <span className="title shimmer"></span>
                        <span className="title shimmer"></span>
                        <span className="comments shimmer"></span>
                    </div>
                </section>
            </StyledRightSide>
        </React.Fragment>
    )
}

export default LoadingView