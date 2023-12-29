
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([]); 

  useEffect(() => {
    fetch('http://localhost:5000/user')
      .then(res => res.json())
      .then(data => setUsers(data)) 
  }, []);

  const handleAddUser = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const newUser = { name, email }; 
    fetch('http://localhost:5000/user', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newUser)
    })
      .then(res => res.json())
      .then(data => {
        const updatedUsers = [...users, data];
        setUsers(updatedUsers);
        form.reset();
      });
  }

  return (
    <>
      <h1>User Management System</h1>
      <h3>Number of users {users.length}</h3>
      <form onSubmit={handleAddUser}>
        <input type="text" name='name' id='' /> <br />
        <input type="email" name='email' id='' /> <br />
        <input type="submit" value='Add User' id='' /> <br />
      </form>
      <div>
        {
          users.map(user => <p key={user.id}>{user.name} {user.email} {user.address}</p>)
        }
      </div>
    </>
  )
}

export default App;
