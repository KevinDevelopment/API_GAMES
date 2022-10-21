import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ListGames() {

    const [list, setList] = useState([]);

    const axiosConfig = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }


    useEffect(() => {
        axios.get('http://localhost:8082/games', axiosConfig)
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

    function formatDate(data) {
        const date = data.substring(0, 10).split('-').reverse().join('/');
        return date;
    };

    function formatHour(Hour) {
        const date = Hour.substring(11, 19)
        return date;
    };

    return (
        <div className="container">
            <Link to={"/games"}><button className="btn btn-primary mt-2 mb-5">Cadastrar novo game</button></Link>
            <Link to={"/auth"}><button className="btn btn-primary mt-2 mb-5 ms-2">Logout</button></Link>

            <hr/>
            <h3>Lista de games:</h3>
            <hr/><br/>

            {list.map((obj) => {
                return (
                    <div>
                        <div className="card">
                            <div className="card-header">
                                <span>Titulo: {obj.title}</span>
                            </div>
                            <div className="card-body">
                                <ul>
                                    <li>Identificação: {obj.id}</li>
                                    <li>Ano: {obj.year}</li>
                                    <li>Preço: {`$ ${obj.price}`}</li>
                                    <li>Data da criação: {formatDate(obj.createdAt)}</li>
                                    <li>Hora da criação: {formatHour(obj.createdAt)}</li>
                                    <li>Data da atualização: {formatDate(obj.updatedAt)}</li>
                                    <li>Hora da atualização: {formatHour(obj.updatedAt)}</li>
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