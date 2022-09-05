import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToPokedex } from '../../routes/coordinator'
import { Top, Logo, Button } from './style'
import logo from './img/logo.png'

const Header = () => {
    const navigate = useNavigate()

    return (
        <Top>
            <Logo src={logo} alt="" />
            <Button onClick={() => { goToPokedex(navigate) }}> Ir para Pokédex</Button>
        </Top>
    )
}

export default Header