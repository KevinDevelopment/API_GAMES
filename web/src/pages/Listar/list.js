import React, { useEffect, useState } from "react";
import axios from "axios";

function ListGames() {

    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/games')
            .then((response) => {
                console.log(response.data);
                setList(response.data.games);
            }).catch((erro) => {
                console.log(erro)
            })
    }, []);

    return (
        <div>
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
                        <br />
                    </div>
                )
            })}

        </div>
    );
}

export default ListGames;