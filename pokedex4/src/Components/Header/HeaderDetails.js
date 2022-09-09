import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Top, Logo } from './style'
import logo from './img/logo.png'
import { Button } from '@chakra-ui/react'
import { goToBack, goToHomePage } from '../../routes/coordinator'


const HeaderDetails = () => {
    const navigate = useNavigate()

    return (
        <Top>
            <Logo src={logo} alt=""
            onClick={() => {goToHomePage(navigate)}} />
            <Button onClick={() => {goToBack(navigate)}} colorScheme="green" variant="solid" size="md" m={4}>Voltar para Página Anterior</Button>
        </Top>
    )
}

export default HeaderDetails