import React, { useContext } from 'react';
import { useRequestData } from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/constants'
import { Button } from '@chakra-ui/react'
import * as S from './style'
import Header from '../../Components/Header/Header';
import { useNavigate } from 'react-router-dom'
import { goToDetailsPage } from '../../routes/coordinator';
// import { PokemonsContext } from '../../context/Context'

function Home() {
  const navigate = useNavigate()
  const [data] = useRequestData(`${BASE_URL}pokemon`)

  // const {pokemons, setPokemons} = useContext(PokemonsContext)

  const listPokemons = data && data.results.map((list) => {
    return (
      <div>

        <S.Card key={list.name}>
          <p>{list.name}</p>
          <img src={list.url} alt="Imagem Pokémon" />
        </S.Card>
        <S.Buttons>
          <Button colorScheme='blue'>Adicionar</Button>
          <Button colorScheme='blue'
          onClick={() =>goToDetailsPage(navigate)}> Ver detalhes</Button>
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