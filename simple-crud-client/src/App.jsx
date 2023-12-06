
import './App.css'

function App() {
  const handelAddUser = event =>{
    event.preventDefault();
    const from = event.target ;
    const name = from.name.value
    const email = from.email.value
    const user = {name, email}
    console.log(user);

    fetch('http://localhost:5000/user', {
      method:'POST',
      headers: {
        'content-type': 'application/json'

      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data)
    })
  }
  return (
    <>
      <h1>Simple CURD</h1>
      <form onSubmit={handelAddUser}>
        <input type='text' name="name" id='' />
        <input type='email' name="email" id='' />
        <input type='submit' value="Add User" id='' />
      </form>
    </>
  )
}

export default App
