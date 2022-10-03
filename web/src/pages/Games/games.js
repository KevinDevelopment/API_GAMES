import React, { useState } from "react";
import axios from "axios";

function Games() {

  const [titulo, setTitulo] = useState();
  const [ano, setAno] = useState();
  const [preco, setPreco] = useState(0);


  function CadastrarGame() {
    axios.post('http://localhost:8081/game', {
      title: titulo,
      year: ano,
      price: preco
    }).then((Response) => {
      console.log("Dados cadastrados com sucesso !!")
      alert("dados cadastrados com sucesso !")
      window.location.reload();      
    }).catch((erro) => {
      console.log("houve um erro na inserção dos dados" + erro)
    })
  }


  return (
    <div className="container mt-3">

      <div className="card col-lg-12">

        <div className="card-header">
          <h4>Cadastrar novo jogo</h4>
        </div>

        <div className="card-body">
          <label>Titulo:</label>
          <input type="text" onChange={(event) => setTitulo(event.target.value)} className="form-control mb-2" />
          <label>Ano:</label>
          <input type="text" onChange={(event) => setAno(event.target.value)} className="form-control mb-2" />
          <label>Preço:</label>
          <input type="number" onChange={(event) => setPreco(Number(event.target.value))} className="form-control" />
        </div>
      </div>
      <button onClick={() => CadastrarGame()} className="btn btn-primary mt-3">Cadastrar</button>
    </div>
  );
}

export default Games;