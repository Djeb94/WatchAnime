import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Infos(){

    const[animeInfos, setAnimeInfos] = useState([]);

    //Récuperer le paramètre 'id' depuis l'url
    const queryString = window.location.search;
    const urlParams	 = new URLSearchParams(queryString);
    const id = urlParams.get('id');

    //Récuperer les informations d'un animé précis grâce à son id
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