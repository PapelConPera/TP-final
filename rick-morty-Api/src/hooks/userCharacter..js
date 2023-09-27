import { useState } from "react";

export function Character(){
    const [allCharacters, setAllCharacters] = useState([]);

    const getAllCharacters = () => {
        return fetch ('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then((data) => setAllCharacters(data,results));
    };

    return {
        getAllCharacters,
        allCharacters,
    };

}                                                                       