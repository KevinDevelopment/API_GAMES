import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Games() {

  const [titulo, setTitulo] = useState();
  const [ano, setAno] = useState();
  const [preco, setPreco] = useState(0);
  const { id } = useParams();
  const [gameId, setGameId] = useState(id);


  function EditGames() {
    axios.put("http://localhost:8082/game", {
      id: gameId,
      title: titulo,
      year: ano,
      price: preco
    }).then((response) => {
      console.log("Dados atualizados com sucesso !!");
      window.location.reload();
      alert("Dados atualizados com sucess !!")
    });
  }


  return (
    <div className="container mt-3">

      <div className="card col-lg-12">

        <div className="card-header">
          <h4>Edite os dados do seu jogo:</h4>
        </div>

        <div className="card-body">
          <label>Game Id:</label>
          <input type="text" defaultValue={gameId} onChange={(event) => setGameId(event.target.value)} className="form-control mb-2" />
          <label>Titulo:</label>
          <input type="text" onChange={(event) => setTitulo(event.target.value)} className="form-control mb-2" />
          <label>Ano:</label>
          <input type="text" onChange={(event) => setAno(event.target.value)} className="form-control mb-2" />
          <label>Preço:</label>
          <input type="number" onChange={(event) => setPreco(Number(event.target.value))} className="form-control" />
        </div>
      </div>
      <button onClick={() => EditGames()} className="btn btn-primary mt-3">Editar</button>
      <Link to={`/list`}><button className="btn btn-primary mt-3 ms-2">Games</button></Link>
    </div>
  );
}

export default Games;