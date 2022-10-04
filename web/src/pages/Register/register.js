import React, { useState } from "react";

function Register() {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

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
    </div>
  );
}

export default Register;