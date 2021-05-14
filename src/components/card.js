import React from 'react'
// import { BASE_URL, API_KEY } from './constants'
// import axios from 'axios'

export default function Card(props){
    const { info } = props;
    return (
        <div className='cardContainer'>
            <div className='imgContainer'>
                <img src={info.hdurl} alt='Astronomy'></img>
            </div>
            <div className="textContent">
                <h1>{info.title}</h1>
                <p>{info.date}</p>
                <p>{info.explanation}</p>
            </div>
            <button>Change Article</button> {/* need to add onclick and change of article effect*/}
        </div>
    );
}