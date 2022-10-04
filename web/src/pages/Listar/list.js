import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ListGames() {

    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8082/games')
            .then((response) => {
                console.log(response.data);
                setList(response.data.games);
            }).catch((erro) => {
                console.log(erro)
            })
    }, []);

    function Deletargame(id) {
        axios.delete(`http://localhost:8082/game/${id}`)
            .then((response) => {
                console.log("Game deletado");
                window.location.reload();
                alert("Game deletado com sucesso !")
            }).catch((erro) => {
                console.log(`desculpe houve um erro ${erro}`)
            })
    };

    return (
        <div className="container">
            <Link to={"/games"}><button className="btn btn-primary mt-2 mb-5">Cadastrar novo game</button></Link>
            <h3>Lista de games:</h3>

            {list.map((obj) => {
                return (
                    <div>
                        <div className="card">
                            <div className="card-header">
                                <span>{obj.title}</span>
                            </div>
                            <div className="card-body">
                                <ul>
                                    <li>{obj.id}</li>
                                    <li>{obj.year}</li>
                                    <li>{obj.price}</li>
                                </ul>
                            </div>
                        </div>
                        <button onClick={() => Deletargame(`${obj.id}`)} className="btn btn-primary mb-5 mt-1">Deletar</button>
                        <Link to={`/games/${obj.id}`}><button className="btn btn-primary mb-5 mt-1 ms-2">Editar</button></Link>
                        <br />
                    </div>
                )
            })}

        </div>
    );
}

export default ListGames;