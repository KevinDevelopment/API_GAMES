import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function Register() {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function RegisterUser() {
    axios.post("http://localhost:8082/user", {
      name: name,
      email: email,
      password: password
    })
      .then(() => {
        console.log("data ok")
        window.location.reload();
        alert("Registered user succesfull")
      }).catch((erro) => {
        console.log(`there was an error ${erro}`)
        alert("empty data is not allowed")
      })
  }

  return (
    <div className="container">
      <div className="card mt-3">
        <div className="card-header">
          <h4>novo por aqui ? cadastre-se agora</h4>
        </div>
        <div className="card-body">
          <label>Name:</label>
          <input type="text" onChange={(event) => setName(event.target.value)} className="form-control mb-2" />
          <label>Email:</label>
          <input type="email" onChange={(event) => setEmail(event.target.value)} className="form-control mb-2" />
          <label>Password:</label>
          <input type="password" onChange={(event) => setPassword(event.target.value)} className="form-control" />
        </div>
      </div>
      <button onClick={() => RegisterUser()} className="btn btn-primary mt-3">Register</button>
      <Link to={"/auth"}><button className="btn btn-primary mt-3 ms-2">Login</button></Link>
    </div>
  );
}

export default Register;