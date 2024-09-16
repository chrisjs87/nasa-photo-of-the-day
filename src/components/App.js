import React, { useState, useEffect} from "react";
import "../App.css";
import Card from "./card"
import axios from 'axios'

function App() {
  const [article, setArticle] = useState({});
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=sSsSIIENWBcxPupe3IZf38kHIa9jO0QcJRxGHK8H`)
      .then(function (response) {
        setArticle(response.data);
      })
      .catch(function (error) {
      // handle error
          console.log(error);
      })
  }, [])

  return (
    <div className="App">
      <Card info={article}/>
    </div>
  );
}

export default App;
