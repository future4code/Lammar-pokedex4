import React, { useContext} from 'react';
import { PokeCard } from "./PokeCard";
import { GlobalStateContext } from "../../context/Context";
import * as S from './style'

const Home = () => {
  
  const { states } = useContext(GlobalStateContext)

  const pokemonList = states.pokemons &&
    states.pokemons.map((pokemon) => {
        return (
          <PokeCard
            key={pokemon.name}
            name={pokemon.name}
          />
        );
      });

  return (
    <S.Container>
      {pokemonList}
    </S.Container>
  );
};

export default Home;

  


