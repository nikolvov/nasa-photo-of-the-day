import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Header from './components/Header'
import Title from './components/Title'
import Photo from './components/Photo'
import Info from './components/Info'


function App() {
  const [data, setData] = useState({})
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=w4FUnhmFDVqg2q0G5St9dIaKYU9OfJ3cSMSpMRRa').then(
      res => {
        console.log(res)
        setData(res.data)
      }
    )
  }, []) 
  // make sure to add dependecy array! which is the empty array at the end

  return (
    <div className="App">
      <Header />
      <Title title = {data.title}/> 
      {/* accessing the data we need using a prop */}
      <Photo photo = {data.url} copyright = {data.copyright}/>
      <Info info = {data.explanation}/>
    </div>
  );
}

export default App;
