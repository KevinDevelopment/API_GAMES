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
            <ul>
                {list.map((obj) => {
                    return (
                        <div>
                            <li>{obj.id}</li>
                            <li>{obj.title}</li>
                            <li>{obj.year}</li>
                            <li>{obj.price}</li>
                            <br />
                        </div>
                    )
                })}
            </ul>
        </div>
    );
}

export default ListGames;