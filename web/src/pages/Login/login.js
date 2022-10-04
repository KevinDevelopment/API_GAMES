import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"

function Login() {


  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  function auth() {
    axios.post("http://localhost:8082/auth", {
      email: email,
      password: password
    })
      .then(() => {
        navigate("/list")
      }).catch((erro) => {
        console.log(`there was an error ${erro}`)
        alert("email or password invalids")
      })
  }

  return (
    <div className="container">
      <div className="card mt-3">
        <div className="card-header">
          <h4>Faça login em sua conta</h4>
        </div>
        <div className="card-body">
          <label>Email:</label>
          <input type="email" onChange={(event) => setEmail(event.target.value)} className="form-control mb-2" />
          <label>Password:</label>
          <input type="password" onChange={(event) => setPassword(event.target.value)} className="form-control" />
        </div>
      </div>
      <button onClick={() => auth()} className="btn btn-primary mt-3">Login</button>
    </div>
  );
}

export default Login;