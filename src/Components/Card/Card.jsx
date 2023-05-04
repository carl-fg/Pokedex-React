import React, {useState, useEffect} from 'react';
import '../../Style/Card.css';

export default function Home() {

  // TITRE DE LA PAGE
  const [title, setTitle] = useState('Cards du Pokedex');

  useEffect(() => {

    document.title = title;

  }, [title]);

  
  const [dataPokemons, setDataPokemons] = useState([]);

  useEffect(() => {

    async function fetchData(){

      const response = await fetch('https://pokebuildapi.fr/api/v1/pokemon/limit/2000'); // Ici 250 pokemons seront affichés, à vous de choisir le nombre de pokemons à mettre en modifiant le 250 se trouvant à la fin de l'URL de l'API.
      const data = await response.json();
      setDataPokemons(data);
    }
    fetchData();
  
  }, []);


  return(
    <div className="card_container">
  
        {dataPokemons.map((pokemon) => (

          <div key={pokemon.id} className="card">
    
            {/* IMAGE DU POKEMON */}
            <div className="card_img_container">
              <img src={pokemon.image} alt={pokemon.name} className="card_img" />
            </div>
    
            {/* INFOS DU POKEMON */}
            <div className="card_infos">
    
              <h3 className="card_name">{pokemon.name}</h3>
    
              <span className="card_type">ID : {pokemon.pokedexId}</span>

              <span className="card_type">Types(s) : {pokemon.apiTypes.map((type) => type.name).join(" & ")}</span>
    
              <h3 className="card_stats_title">Stats</h3>
    
              <ul className="card_list">
                <li>Points de vie : {pokemon.stats.HP}</li>
                <li>Points d'attaque : {pokemon.stats.attack}</li>
                <li>Points de défense : {pokemon.stats.defense}</li>
                <li>Vitesse : {pokemon.stats.speed}</li>
              </ul>
            </div>
          </div>

        ))}


    </div>
    
  )
}