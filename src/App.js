import React from "react";
import { Panel, Screen } from './components'
import { Main, Container } from './styles'

function App() {
  return (
    <Main>
      <Container>
        <Panel />
        <Screen />
      </Container>
    </Main>
  );
}

export default App;
