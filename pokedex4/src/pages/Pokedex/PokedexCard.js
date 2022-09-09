import React from 'react';
import { useRequestData } from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/constants";
import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import * as S from '../Home/style'
import { GlobalStateContext } from "../../context/Context";
import { useContext } from "react";

export const PokedexCard = (props) => {

  const { states, setters } = useContext(GlobalStateContext)

  const pokemon = useRequestData({}, `${BASE_URL}${props.name}`)[0];

  const navigate = useNavigate()

  const remover = (poke, index) => {
    const pokeInHome = { ...poke }
    const newPokeHome = [pokeInHome, ...states.pokemons]
    setters.setPokemons(newPokeHome)
    if (pokemon === poke) {
      states.pokedex.splice(index, 1)
    }
  }

  return (
    <S.Conteudo>
      <S.Card>
        <img src={pokemon.sprites && pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
        />
        <div>
          <p>{pokemon.name}</p>
        </div>
      </S.Card>

      <S.Buttons>
        <Button colorScheme='red' onClick={() => remover(pokemon, props.index)}>
          Remover
        </Button>
        <Button colorScheme='blue'
          onClick={() => {
            navigate(`/pokemon/${pokemon.name}`)
          }}> Ver detalhes</Button>
      </S.Buttons>
    </S.Conteudo>
  );
};
