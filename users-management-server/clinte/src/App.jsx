
import { useEffect, useState } from 'react'
import './App.css'

function App() {
 const [user , setUser] = useState([])
 useEffect(()=>{
  fetch('http://localhost:5000/user')
  .then(res => res.json())
  .then(data => setUser(data))
 },[])

 const  handelAddUse = event =>{
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  console.log(name, email);
 }
  return (
    <>
      <h1>User Managment System</h1>
      <h3>Number of user {user.length}</h3>
      <form onSubmit={handelAddUse}>
        <input type="text" name='name' id=''  /> <br/>
        <input type="email" name='email' id='' /> <br/>
        <input type="submit" value='Add User' id='' /> <br/>
      </form>
     <div>
      {
        user.map(user => <p key={user.id}>{user.name}  {user.email} {user.address}</p>)
      }
     </div>
    </>
  )
}

export default App
