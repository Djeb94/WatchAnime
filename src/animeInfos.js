import react from 'react';
import axios from 'axios';

function Infos(){

    
    const queryString = window.location.search;
    const urlParams	 = new URLSearchParams(queryString);
    const id = urlParams.get('id');

    axios.get(`https://api.jikan.moe/v4/top/anime?mal_id=${id}`);

    return(
        <div>
            <h1>Hello wolrd</h1>
        </div>
    );
};

export default Infos;