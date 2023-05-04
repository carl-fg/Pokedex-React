import React, {useState, useEffect} from 'react';
import Card from '../Card/Card';
import '../../Style/Home.css'

export default function Home() {

  // TITRE DE LA PAGE
  const [title, setTitle] = useState('Pokedex en React');

  useEffect(() => {

    document.title = title;

  }, [title]);



  return(
    <main className="main">

      {/* SECTION 1 */}
      <section className="section_une">

        <h1 className="section_une_title">Pokedex React</h1>

        <p className="s_une_info_projet_text">
          Ce projet est un Pokedex utilisant une des API du site <a href="https://pokebuildapi.fr/api/v1">POKEBUILDAPI</a>. Il a été réalisé par C®#4987 et fait partie d'une liste de 5 projets mettant en scène les connaissances acquises depuis des années pour terminer son parcours FrontEnd. Toutes les infos pour lancer ce pokedex sont disponibles sur <a href="https://github.com/carl-fg">Github</a>. De base ce projet contient 250 cartes de Pokemons, à vous changer le nombre de cartes via la ligne 22 du fichier "Card.jsx". (Projet réalisé le 04/05/2023).
        </p>

      </section>

      {/* SECTION 2 */}
      <section className="section_deux" id="s_deux">

        <Card />
      </section>
    </main>
  )
}