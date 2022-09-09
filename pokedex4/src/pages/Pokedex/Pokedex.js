import React from "react";
import { GlobalStateContext } from "../../context/Context";
import { useContext } from "react";
import { PokedexCard } from "./PokedexCard";
import HeaderPokedex from "../../Components/Header/HeaderPokedex"
import * as S from '../Home/style'

const Pokedex = () => {

  const { states } = useContext(GlobalStateContext)

  const pokedexList = states.pokedex &&
    states.pokedex.sort((a, b) => {
      return a.id - b.id
    })
      .map((pokemon, index) => {
        return (
          <PokedexCard
            key={pokemon.name}
            name={pokemon.name}
            index={index}
          />
        );
      });
  return (
    <S.Container>
      <HeaderPokedex/>
        {states.pokedex && pokedexList}
    </S.Container>
    
  );
};

export default Pokedex;
