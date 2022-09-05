import React, { useState } from "react";
import Router from "./routes/router";
import { ChakraProvider } from "@chakra-ui/react";
import { PokemonsContext } from "./context/Context"

function App() {

  const [pokemons, setPokemons] = useState([])

  return (
    <div>
      <PokemonsContext.Provider value={{pokemons, setPokemons}}>
        <ChakraProvider ChakraProvider>
          <Router />
        </ChakraProvider>
      </PokemonsContext.Provider>
    </div>
  );
}

export default App;
