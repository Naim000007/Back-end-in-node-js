import './App.css'

// function App() {
//   const handeAddUser = event =>{
//     event.preventDefault();
//     const form = event.target;
//     const name  = form.name.value;
//     const email = form.email.value;
//     const user = {name, email}
//     console.log(user);
//     fetch('http://localhost:5000/users',{
//       method:'POST',
//       headers:{
//         'content-type':'application/json'
//       },
//       body: JSON.stringify(user)
//     })
//     .then(res => res.json())
//     .then(data=> {
//       console.log(data)
//     })
//   }
//   return (
//     <>
//       <h1>Simple CURD</h1>
//       <form  onSubmit={handeAddUser}>
//         <input type="text" name='name'/> <br />
//         <input type="text" name='email'/>
//          <br />
//         <input type="submit" value='Add User'/>
//       </form>
      
//     </>
//   )
// }

import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import routes from "./routes/routes";

function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
      <ToastContainer />
    </>
  );
}

export default App;


