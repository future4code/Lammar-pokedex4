import React from "react";
import Router from "./routes/router";
import { ChakraProvider } from "@chakra-ui/react";
import { GlobalState } from "./context/GlobalState"

function App() {

  return (
    <div>
      <GlobalState>
        <ChakraProvider ChakraProvider>
          <Router />
        </ChakraProvider>
      </GlobalState>
    </div>
  );
}

export default App;
