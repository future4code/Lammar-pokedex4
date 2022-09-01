import React from 'react';
import Router from './routes/router';
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
