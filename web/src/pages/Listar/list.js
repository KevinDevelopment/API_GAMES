import React, { useEffect, useState } from "react";
import axios from "axios";

function ListGames() {

    const [list, setList] = useState();

    useEffect(() => {
        axios.get('http://localhost:8081/games')
            .then((response) => {
                console.log(response.data);
                setList(response.data);
            }).catch((erro) => {
                console.log(erro)
            })
    }, []);

    return (
        <div>
            lista de games
        </div>
    );
}

export default ListGames;