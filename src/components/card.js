import React, { useState, useEffect } from 'react'
// import { BASE_URL, API_KEY } from './constants'
import axios from 'axios'

export default function Card(props){
    // const initialState = 
    //     axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    //         .then(function (response) {
    //         setCardInfo(response.data);
    //         })
    //         .catch(function (error) {
    //         // handle error
    //             console.log(error);
    //         })
    const [cardInfo, setCardInfo] = useState(null);
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
                .then(function (response) {
                setCardInfo(response.data);
                })
                .catch(function (error) {
                // handle error
                    console.log(error);
                })
            }, [cardInfo])
    console.log(cardInfo);

   

    


    // function switchArticle(){
    //     useEffect(() => {
    //     axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    //     .then(function (response) {
    //       // handle success
    //     //   console.log(response.data);
    //       setCardInfo(response.data);
    //     })
    //     .catch(function (error) {
    //       // handle error
    //     //   console.log(error);
    //     })
    //     return () => {
    //       //Component will unmount
    //       console.log('component unmounting, the id was ' + friendId)
    //     }
    //   }, [])
    // }

    return (
        <div className='cardContainer'>
            <div className='imgContainer'>
                <img src={cardInfo.hdurl} alt='Astronomy'></img>
            </div>
            <div className="textContent">
                <h1>{cardInfo.title}</h1>
                <p>{cardInfo.date}</p>
                <p>{cardInfo.explanation}</p>
            </div>
            <button>Change Article</button> {/* need to add onclick and change of article effect*/}
        </div>
    );
}