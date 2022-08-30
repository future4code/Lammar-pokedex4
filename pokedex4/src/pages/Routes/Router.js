import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Home/Home';
import Pokedex from '../Pokedex/Pokedex';
import DetailsPage from '../DetailsPage/DetailsPage';
import ErrorPage from '../ErrorPage/ErrorPage'

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={ <Home/> }/>
            <Route path="/pokedex" element={ <Pokedex/> }/>
            <Route path="/detalhes" element={ <DetailsPage/> }/>
            <Route path="/404" element={ <ErrorPage/> }/>
        </Routes>
    </BrowserRouter>
  );
}

export default Router;