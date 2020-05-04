import React from 'react'
import styled from 'styled-components'

const StyledView = styled.ul`
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

const fakeArray = [...Array(10)]

const LoadingView = () => {
    return (
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
    )
}

export default LoadingView