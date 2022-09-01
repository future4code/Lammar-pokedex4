import React from 'react';
import { goToBack } from '../../routes/coordinator';

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
// import Pokebola from '../img/pokeball.png'

const Pokeball = styled.div`
background: linear-gradient(56deg, rgba(255,235,0,0.6895133053221288) 0%, rgba(71,58,224,0.7847514005602241) 21%, rgba(71,58,224,0.7175245098039216) 74%, rgba(255,235,0,0.6418942577030813) 94%);
`
const Header = styled.header`
font-family: 'Pokemon Solid', sans-serif;
display:flex;
justify-content:space-between;
height:100px;
h2 {
    text-transform: uppercase;
    letter-spacing: 0.3em;
    -webkit-text-stroke: 1.5px #2e3fbd;
     color: #FFFF00;
}


`
const ButtonHeader = styled.button`
height:40px;
width:80px;
border-radius:5px;
margin:30px 20px;
border:0.5px solid #e0aa34;
background:none;
cursor: pointer;

&:hover{
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(46,63,189,0.2);
    background-color:rgba(46,63,189,0.2);
}
`
const ButtonHeader2 = styled.button`
display:flex;
height:40px;
margin-top:20px;
margin-right:20px;
background:none;
border:none;
cursor: pointer;

img{
    width:60px;
}
&:hover{
    transform: translateY(-3px);
}

@media (max-width: 600px){
 img{
    display:none;
 }
}
`
const Card = styled.main`
display:flex;
flex-wrap: wrap;
justify-content: center;
align-items: start;
width:100%;

`
const BoxImagens = styled.div`
width: 200px;
margin: 20px;
padding: 0;
img {
    width: 100%;
    object-fit: cover;
    border: 1px solid #ccc;
    margin-bottom: 20px;
    box-shadow: 0 0 3px #888;
}
`
const BoxStats = styled.div`
margin: 20px;
width: 200px;
border: 1px solid #ccc;
padding: 10px;
text-transform: capitalize;
box-shadow: 0 0 3px #888;
h3 {
    text-align: center;
    margin: 0;
}
`
const BoxTypesMoves = styled.div`
margin: 20px 20px 20px 0px;
width: 200px;
h3 {
    text-align: center;
    margin: 0;
}
.type, .move {
    border: 1px solid #ccc;
    box-shadow: 0 0 3px #888;
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    .list {
        display: flex;
        justify-content: center;
    }
    span, p {
        text-transform: capitalize;
        margin: 10px;
    }
}
`

function DetailsPage() {
  const navigate = useNavigate()
  const { name } = useParams();
    const [stats, setStats] = useState([])
    const [imagens, setImagens] = useState({})
    const [types, setTypes] = useState([])
    const [moves, setMoves] = useState([])

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res) => {
            console.log(res.data)
            setImagens(res.data.sprites)
            setStats(res.data.stats)
            setTypes(res.data.types)
            setMoves(res.data.moves)
        }).catch(() => {
        })
    }, [name])

    const listStats = stats.map((stat, index) => {
        return <p key={index}>{stat.stat.name}: {stat.base_stat}</p>
    })

    const listType = types.map((type, index) => {
        return <span key={index}>{type.type.name}</span>
    })

    const listMove = moves.map((move, index) => {
        return <p key={index}>{index + 1} - {move.move.name}</p>
    })

    return (
      <Pokeball>
            <Header>
                <ButtonHeader onClick={() => { navigate('/') }}>Voltar</ButtonHeader>
                <h2>{name}</h2>
                <ButtonHeader2 onClick={() => { navigate('/pokedex') }}>
                    {/* <img src={Pokebola}
                    alt="Pokebola" */}
                    </ButtonHeader2>
            </Header>

            <Card>
                <BoxImagens>
                    <img src={imagens.front_default}
                    alt="imagens.front_default"
                    />
                    <img src={imagens.back_default}
                    alt="imagens.back_default"
                    />
                </BoxImagens>

                <BoxStats>
                    <h3>Stats</h3>
                    {listStats}
                </BoxStats>

                <BoxTypesMoves>
                    <div className="type">
                        <h3>Types</h3>
                        <div className="list">{listType}</div>
                    </div>

                    <div className="move">
                        <h3>Moves</h3>
                        {listMove}
                    </div>
                    <button onClick={() => {goToBack(navigate)}}> Voltar</button>
                </BoxTypesMoves>
            </Card>
        </Pokeball>
    );
  }
  
  export default DetailsPage;


