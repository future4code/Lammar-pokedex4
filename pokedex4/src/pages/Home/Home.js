import React from 'react';
import { useRequestData } from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/constants'
import { Button } from '@chakra-ui/react'
import * as S from './style'
import Header from '../../Components/Header/Header';
import { useNavigate } from 'react-router-dom'


function Home() {
  const navigate = useNavigate()
  const [data] = useRequestData(`${BASE_URL}pokemon`)
  
  const listPokemons = data && data.results.map((list) => {
    return (
      <div>
        <S.Card key={list.name}>
          <p>{list.name}</p>

          <img src={''} alt="pokemon" />
  
        </S.Card>
        <S.Buttons>
          <Button colorScheme='blue'>Capturar</Button>
          <Button colorScheme='blue'
          onClick={() => {
            navigate(`/${list.name}`)
          }}> Ver detalhes</Button>
        </S.Buttons>

      </div>
    )
  })

  return (
    <div>
      <Header />
      <S.Container>
        {listPokemons}
      </S.Container>
    </div>
  );
}

export default Home;