import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToHomePage, goToPokedex } from '../../routes/coordinator'
import { Top, Logo } from './style'
import logo from './img/logo.png'
import { Button } from '@chakra-ui/react'

const Header = () => {
    const navigate = useNavigate()

    return (
        <Top>
            <Logo src={logo} alt=""
            onClick={() => {goToHomePage(navigate)}} />
            <Button onClick={() => {goToPokedex(navigate)}} colorScheme="green" variant="solid" size="md" m={4}>Ir para Pokedex</Button>
        </Top>
    )
}

export default Header