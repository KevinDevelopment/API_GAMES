import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"

function Login() {


  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const auth = () => {
    axios.post("http://localhost:8082/auth", {
      email: email,
      password: password
    })
      .then((response) => {
        navigate("/list")
        const token = response.data.token;
        localStorage.setItem("token", token);
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
          <input type="email" placeholder="email@email.com" onChange={(event) => setEmail(event.target.value)} className="form-control mb-2" />
          <label>Password:</label>
          <input type="password" placeholder="********" onChange={(event) => setPassword(event.target.value)} className="form-control" />
        </div>
      </div>
      <button onClick={() => auth()} className="btn btn-primary mt-3">Login</button>
      <Link to={"/"}><button className="btn btn-primary mt-3 ms-2">Register</button></Link>
    </div>
  );
}

export default Login;