import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import "./main.css";

function Main({goToPage}){

    const[animeList, setAnimeList] = useState([]);
    const[page, setPage] = useState(goToPage);
    const[inputValue, setInputValue] = useState('');

    //Recup all the anime from the api
    useEffect(() => {
      axios.get(`https://api.jikan.moe/v4/top/anime?page=${page}`)
        .then(response =>{
          setAnimeList(response.data.data);
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des animés :', error);
        });
  
  
    }, [page]);
  
    const handlePageChange = (e) => {
      e.preventDefault();
      const requestPage = parseInt(inputValue);
  
      if(!isNaN(requestPage)&& requestPage > 0){
        setPage(requestPage);
        setInputValue('');
      }else{
        alert('Veuillez entrer un numéro de page valide.')
      }
    }
  
    return (
      <div>
        <h1>Liste des animés</h1>
          <div className='containeur'>
            {animeList.map(anime =>(
            <Link to={`/infos?id=${anime.mal_id}`} className='link'>
              <div key ={anime.mal_id} className='animeCard' id={`animeCard${anime.mal_id}`}>
                <img src={anime.images.jpg.image_url} alt={anime.title} />
                <h3>{anime.title}</h3>
              </div>
            </Link>
            ))}
          </div>
        <div className='listNavigation'>
          <button onClick={() => setPage(page > 1 ? page - 1 : 1)}>Precedent</button>
          <form onSubmit={handlePageChange}>
          <input type='numeric' placeholder={page} value={inputValue} onChange={(e)=> setInputValue(e.target.value)}></input>
          </form>
          <button onClick={() => setPage(page + 1)}>Suivant</button>
        </div>
        
      </div>
    );
  
  }
  
  
  export default Main;
  