import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { goToDetailsPage, goToPokedex } from '../../routes/coordinator';
import axios from 'axios';

function Home() {
  const navigate = useNavigate()

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon")
    .then((res) => {setPokemons(res.data.results)})
    .catch((err) => {console.log(err)})
  }, []);

  const pokemonList = pokemons.map((pokemon) => {
    return (
      <div>
        <p>{pokemon.name}</p>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png`} alt={pokemon.name}/>
       	
        <button onClick={() => goToDetailsPage(navigate, pokemon.name)}>Detalhes</button>
      </div>
    )
  })

    return (
      <div>
        <header>
        <p>Home</p>
        <button onClick={() => {goToPokedex(navigate)}}> Ir para Pokedex</button>
        </header>
        <main>
          {pokemonList}
        <button onClick={() => {goToDetailsPage(navigate)}}> Ver detalhes</button>
        </main>
      </div>
    );
  }
  
  export default Home;