import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [user, setUser] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/user')
    .then((res) => res.json())
    .then(data=> setUser(data))
  },[])

  const handleAddUser = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);
    fetch('http://localhost:5000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email }) 
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  }
  

  return (
    <>
        <h1>User management system </h1>
        <h3>Number of user {user.length}</h3>
        <form onSubmit={handleAddUser}> 
          <input type="text" name='name' />
          <br />
          <input type="text" name='email' />
          <br />
          <input type="submit" value='Add User' />
        </form>
       <div>
        {
          user.map(a => <p key={a.id}>Id: {a.id } Name: {a.name} Email:{a.email} </p>)
        }
       </div>

    </>
  )
}

export default App
