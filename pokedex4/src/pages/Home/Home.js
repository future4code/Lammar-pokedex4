import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { goToDetailsPage, goToPokedex } from '../../routes/coordinator';
import axios from 'axios';
import {Card, Container} from './style'

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
      <Card>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png`} alt={pokemon.name}/>
        <p>{pokemon.name}</p>
        <button onClick={() => goToDetailsPage(navigate, pokemon.name)}>Detalhes</button>
      </Card>
    )
  })

    return (
      <div>
        <header>
        <p>Lista de Pokemons</p>
        <button onClick={() => {goToPokedex(navigate)}}> Ir para Pokedex</button>
        </header>
        <main>
        <Container>
          {pokemonList}
        <button onClick={() => {goToDetailsPage(navigate)}}> Ver detalhes</button>
        </Container>
        </main>
      </div>
    );
  }
  
  export default Home;