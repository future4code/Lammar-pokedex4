import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import { Ataques, Tipos, PageDetail, ImagesDetails, Poderes, Containers, Container2 } from "./style";
import { useParams } from "react-router-dom";
import axios from "axios";

function DetailsPage() {

  const [pokemon, setPokemon] = useState({});

  const id = useParams();

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id.name}`)
      .then((response) => {
        setPokemon(response.data)
        console.log(response.data.sprites)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [id]);


  const imagem = pokemon.sprites && pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default

  const imagem_back = pokemon.sprites && pokemon.sprites.versions["generation-v"]["black-white"].animated.back_default

  return (
    <div>
      <Header />
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
            {/* <h1>habilities</h1>
            <p>Abilities: {pokemon.abilities && pokemon.abilities[0].ability.name}</p>
            <p>Abilities: {pokemon.abilities && pokemon.abilities[1].ability.name}</p> */}
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
// ] = useState({})
//   const { id } = useParams()

//   useEffect(() => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}}`;
//     axios(url)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data)
//         setPokemon(data);
//       });
//   }
//   , []);

//   return (
//     <div>
//       <Header />
//       <PageDetail>
//         <ImagesDetails>
//           <img src={pokemon.sprites?.front_default}
//             alt="imagem do pokemon" />
//           <img src={pokemon.sprites?.back_default} 
//             alt="imagem do pokemon" />
//         </ImagesDetails>
//         <Containers>
//           <Poderes>
//             <h2><strong>Poderes</strong></h2>
//             <p>HP: {pokemon.stats?.[0]?.base_stat}</p>
//             <p>Attack: {pokemon.stats?.[1]?.base_stat}</p>
//             <p>Defense: {pokemon.stats?.[2]?.base_stat}</p>
//             <p>Special Attack: {pokemon.stats?.[3]?.base_stat}</p>
//             <p>Special Defense: {pokemon.stats?.[4]?.base_stat}</p>
//             <p>Speed: {pokemon.stats?.[5]?.base_stat}</p>
//           </Poderes>
//           <Container2>
//             <Tipos>
//               <h2><strong>Tipo:</strong></h2>
//               <p>{pokemon.types?.[0]?.type.name}</p>
//               <p>{pokemon.types?.[1]?.type.name}</p>
//             </Tipos>
//             <Ataques>
//               <h2><strong>Ataques</strong></h2>
//               <p>{pokemon.moves?.[0]?.move.name}</p>
//               <p>{pokemon.moves?.[1]?.move.name}</p>
//               <p>{pokemon.moves?.[2]?.move.name}</p>
//               <p>{pokemon.moves?.[3]?.move.name}</p>
//               <p>{pokemon.moves?.[4]?.move.name}</p>
//               <p>{pokemon.moves?.[5]?.move.name}</p>
//               <p>{pokemon.moves?.[6]?.move.name}</p>
//               <p>{pokemon.moves?.[7]?.move.name}</p>
//               <p>{pokemon.moves?.[8]?.move.name}</p>
//               <p>{pokemon.moves?.[9]?.move.name}</p>
//               <p>{pokemon.moves?.[10]?.move.name}</p>
//               <p>{pokemon.moves?.[11]?.move.name}</p>
//               <p>{pokemon.moves?.[12]?.move.name}</p>
//               <p>{pokemon.moves?.[13]?.move.name}</p>
//               <p>{pokemon.moves?.[14]?.move.name}</p>
//               <p>{pokemon.moves?.[15]?.move.name}</p>
//             </Ataques>
//           </Container2>
//         </Containers>
//       </PageDetail>
//     </div>
//   );
// }
//   return (
//     <div>
//       <Header />

//       <div>
//         <PageDetail>
//           <ImagesDetails>
//             <img
//               src={
//                 "https://sm.ign.com/ign_br/screenshot/default/025pikachu-os-anime-4_3pym.png"
//               }
//               alt="Imagem do Pokemon"
//             />
//             <img
//               src={
//                 "https://sm.ign.com/ign_br/screenshot/default/025pikachu-os-anime-4_3pym.png"
//               }
//               alt="Imagem do Pokemon"
//             />
//           </ImagesDetails>

//           <Containers>
//             <Poderes>
//               <h2>Status</h2>

//               <p>hp: 45</p>
//               <p>attack: 49</p>
//               <p>defesa: 49</p>
//               <p>ataque especial: 65</p>
//               <p>defesa especial: 65</p>
//               <p>velocidade: 45</p>
//             </Poderes>
//             <div>
//             <Container2>
//               <Tipos>
//                 <li>veneno</li>
//                 <li>grama</li>
//               </Tipos>

//               <Ataques>
//                 <h2>Principais ataques</h2>
//                 <li>Razor-Wind</li>
//                 <li>Swords-Dance</li>
//                 <li>Cut</li>
//                 <li>Bind</li>
//                 <li>Vine-Whip</li>
//               </Ataques>
//               </Container2> 
//             </div>
//           </Containers>
//         </PageDetail>
//       </div>
//     </div>
//   );
// }