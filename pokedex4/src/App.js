import React from 'react';
import Router from './pages/Routes/Router';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div>
      < ChakraProvider>
        <Router />
      </ ChakraProvider>
    </div>
  );
}

export default App;
