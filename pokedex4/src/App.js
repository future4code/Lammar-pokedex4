import React, { useState, useEffect } from "react";
import Router from "./routes/router";
import { ChakraProvider } from "@chakra-ui/react";
import { GlobalStateContext } from "./context/GlobalStateContext"
import { BASE_URL } from "./constants/constants";
import { useRequestData } from './hooks/useRequestData'

function App() {

  const [pokemons, setPokemons] = useState([])
  const [pokedex, setPokedex] = useState([])

  const states = { pokemons, pokedex }
  const setters = { setPokemons, setPokedex }

  const [data] = useRequestData({}, `${BASE_URL}?limit=30`);

  useEffect(() => {
    setPokemons(data.results)
  }, [data])

  const listPokedex = []

  const capturaPokemon = (id) => {

    const index = pokemons.findIndex((pokemon) => {
      return pokemons.id === id
    })

    if (index === -1) {
      listPokedex.push({ ...pokemons })
    }
    setPokemons(listPokedex)
  }

  console.log(listPokedex);
  return (
    <div>
      <GlobalStateContext.Provider value={{ states, setters, capturaPokemon, listPokedex }}>
        <ChakraProvider ChakraProvider>
          <Router />
        </ChakraProvider>
      </GlobalStateContext.Provider>
    </div>
  );
}

export default App;
