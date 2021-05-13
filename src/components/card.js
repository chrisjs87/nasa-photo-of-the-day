import React, { useState, useEffect } from 'react'

export default function Card(props){
    return (
        <div className='cardContainer'>
            <div className='imgContainer'>
                <img src={astronomyImage} alt='Astronomy'></img>
            </div>
            <div className="textContent">
                <h1>{title}</h1>
                <p>{date}</p>
                <p>{articleText}</p>
            </div>
            <button>Change Article</button> {/* need to add onclick and change of article effect*/}
        </div>
    );
}