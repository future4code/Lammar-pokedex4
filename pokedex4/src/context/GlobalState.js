import { GlobalStateContext } from "./Context";
import React, { useState, useEffect } from "react";
import { BASE_URL } from "../constants/constants";
import { useRequestData } from "../hooks/useRequestData";

export const GlobalState = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  const states = { pokemons, pokedex };
  const setters = { setPokemons, setPokedex };

  const [data] = useRequestData({}, `${BASE_URL}?limit=30`);

  useEffect(() => {
    setPokemons(data.results);
  }, [data]);

  const listPokedex = [];

  const capturaPokemon = (id) => {
    const index = pokemons.findIndex((pokemon) => {
      return pokemons.id === id;
    });

    if (index === -1) {
      listPokedex.push({ ...pokemons });
    }
    setPokemons(listPokedex);
  };

  return (
    <GlobalStateContext.Provider
      value={{ states, setters, capturaPokemon }}
    >
      {props.children}
    </GlobalStateContext.Provider>
  );
};
