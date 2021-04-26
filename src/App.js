import React from 'react'
import PrettyForm from './PrettyForm';
import Form from './Form'
import { ChakraProvider, CSSReset } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <PrettyForm />
    </ChakraProvider>
  )
}

export default App
