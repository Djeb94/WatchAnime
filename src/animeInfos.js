import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Infos(){

    const[animeInfos, setAnimeInfos] = useState([]);

    //Recup the params from the url
    const queryString = window.location.search;
    const urlParams	 = new URLSearchParams(queryString);
    const id = urlParams.get('id');

    //Recup specific anime's data with is id
    useEffect(() =>{
        axios.get(`https://api.jikan.moe/v4/anime/${id}`)
        .then(response =>{
            setAnimeInfos(response.data.data);
        })
        .catch(error =>{
            console.log("Erreur lors de la récupération des informations de l'animés :", error);
        });
    },);

    return(
        <div>
            <h1>{animeInfos.title}</h1>
        </div>
    );
};

export default Infos;