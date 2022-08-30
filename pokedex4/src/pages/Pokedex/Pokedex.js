import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToDetailsPage, goToHomePage } from '../../routes/coordinator';

function Pokedex() {
  const navigate = useNavigate()

    return (
      <div>
        <p>Pokedex</p>
        <button onClick={() => {goToHomePage(navigate)}}> Voltar pra lista de Pokemons</button>
        <button onClick={() => {goToDetailsPage(navigate)}}> Ver Detalhes</button>
        
  
      </div>
    );
  }
  
  export default Pokedex;