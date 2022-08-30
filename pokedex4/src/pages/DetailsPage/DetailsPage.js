import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToBack } from '../../routes/coordinator';

function DetailsPage() {
  const navigate = useNavigate()
    return (
      <div>
        <p>DetailsPage</p>
        <button onClick={() => {goToBack(navigate)}}> Voltar</button>
  
      </div>
    );
  }
  
  export default DetailsPage;