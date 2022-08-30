import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToDetailsPage, goToPokedex } from '../Routes/Coordinator';

function Home() {
  const navigate = useNavigate()

    return (
      <div>
        <p>Home</p>
        <button onClick={() => {goToPokedex(navigate)}}> Ir para Pokedex</button>
        <button onClick={() => {goToDetailsPage(navigate)}}> Ver detalhes</button>
  
      </div>
    );
  }
  
  export default Home;