import React, { useState, useEffect } from "react";
import { Ataques, Tipos, PageDetail, ImagesDetails, Poderes, Containers, Container2 } from "./style";
import { useParams } from "react-router-dom";
import HeaderDetails from "../../Components/Header/HeaderDetails"
import axios from "axios";

function DetailsPage() {

  const [pokemon, setPokemon] = useState({});

  const id = useParams();

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id.name}`)
      .then((response) => {
        setPokemon(response.data)
      })
      .catch((err) => {
      })
  }, [id]);


  const imagem = pokemon.sprites && pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default

  const imagem_back = pokemon.sprites && pokemon.sprites.versions["generation-v"]["black-white"].animated.back_default

  return (
    <div>
      <HeaderDetails/>
      <PageDetail>
        <ImagesDetails>
          <img src={imagem} alt="pokemon" />
          <img src={imagem_back} alt="pokemon" />
        </ImagesDetails>
        <Containers>
          <Poderes>
            <h2>Poderes</h2>
            <p>HP: {pokemon.stats && pokemon.stats[0].base_stat}</p>
            <p>Attack: {pokemon.stats && pokemon.stats[1].base_stat}</p>
            <p>Defense: {pokemon.stats && pokemon.stats[2].base_stat}</p>
            <p>Speed: {pokemon.stats && pokemon.stats[5].base_stat}</p>
            <p>Special Attack: {pokemon.stats && pokemon.stats[3].base_stat}</p>
            <p>Special Defense: {pokemon.stats && pokemon.stats[4].base_stat}</p>
            <p>Special Speed: {pokemon.stats && pokemon.stats[5].base_stat}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Height: {pokemon.height}</p>
          </Poderes>
          <Container2>
            <Tipos>
              <h2>Tipo:</h2>
              {pokemon.types && pokemon.types.map((type) => {
                return <p key={type.type.name}>{type.type.name}</p>
              })}
            </Tipos>
            <Ataques>
              <h2>Ataques</h2>
              {pokemon.moves && pokemon.moves.slice(0, 5).map((move) => {
                return <p key={move.move.name}>{move.move.name}</p>
              })}
            </Ataques>
          </Container2>
        </Containers>
      </PageDetail>
    </div>
  );
}

export default DetailsPage;