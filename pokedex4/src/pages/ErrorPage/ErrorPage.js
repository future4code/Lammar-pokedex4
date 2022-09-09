import React from 'react';
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from '../../routes/coordinator'
import imgErro from './imgErro.jpg'
import { Button } from '@chakra-ui/react'
import * as S from './style'

function ErrorPage() {
  const navigate = useNavigate()

  return (
    <S.Container>
      <S.P>Page not found!</S.P>
      <S.Img src={imgErro} alt="" />
      <Button colorScheme='red' onClick={() => goToHomePage(navigate("/"))}>
        Página Inicial
      </Button>
    </S.Container>
  );
}

export default ErrorPage;