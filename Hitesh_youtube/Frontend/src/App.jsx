import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([])
  // useEffect(()=>{
  //   fetch('http://localhost:3000/jokes')
  //   .then((res)=> res.json())
  //   .then(data =>setJokes(data))
  // },[])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response) =>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  })

  return (
    <>
    <h1>Naim Sheikh</h1>
    <p>jokes {jokes.length}</p>
   {
    jokes.map((joke) => (
      <div key={joke.id}>
        <h3>{joke.title}</h3>
        <p>{joke.content}</p>
      </div>
    ))
  }
  
    </>
  )
}

export default App
