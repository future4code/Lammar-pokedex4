import React from 'react';
import { useRequestData } from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/constants";
import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import * as S from './style'

export const PokeCard = (props) => {

  const pokemon = useRequestData({}, `${BASE_URL}${props.name}`)[0];

  const navigate = useNavigate()

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
          <Button colorScheme='blue'>Capturar</Button>
          <Button colorScheme='blue'
          onClick={() => {
            navigate(`/${pokemon.name}`)
          }}> Ver detalhes</Button>
        </S.Buttons>
    </S.Conteudo>
  );
};



       