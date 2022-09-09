import React, { useContext } from 'react';
import { PokeCard } from "./PokeCard";
import { GlobalStateContext } from "../../context/Context";
import * as S from './style'
import Header from '../../Components/Header/Header'

const Home = () => {

  const { states } = useContext(GlobalStateContext)

  const pokemonList = states.pokemons &&
    states.pokemons.map((pokemon, index) => {
      return ( 
          <PokeCard
          key={pokemon.name}
          name={pokemon.name}
          index={index}
        />
      );
    });


  return (
    <S.Container>
      <Header/>
      {pokemonList}
    </S.Container>
  );
};

export default Home;




