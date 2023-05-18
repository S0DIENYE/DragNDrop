import React from 'react';
import DropZone from './components/DropZone';
import { Container, Box } from '@chakra-ui/react';

const App = () => {
  return (
    <Container height='100vh' maxW='2x1' bg='blue.100' centerContent>
      <DropZone />
    </Container>
  )
}

export default App