import React from 'react'
import styled from 'styled-components'
// import { BASE_URL, API_KEY } from './constants'
// import axios from 'axios'

const StyledCard = styled.div`
    color: ${props => props.theme.black};
    width: 80%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;

const StyledImg = styled.img`
    width: 50%;
`;

export default function Card(props){
    const { info } = props;
    return (
        <StyledCard>
            <StyledImg src={info.hdurl} alt='Astronomy'></StyledImg>
            <div className="textContent">
                <h1>{info.title}</h1>
                <p>{info.date}</p>
                <p>{info.explanation}</p>
            </div>
            <button>Change Article</button> {/* need to add onclick and change of article effect*/}
        </StyledCard>
    );
}