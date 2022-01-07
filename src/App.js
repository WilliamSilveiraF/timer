import React from "react";
import { BsFillArrowUpSquareFill, BsFillArrowDownSquareFill } from 'react-icons/bs';
import { 
  Main,
  Container,
  Panel,
  Screen,
  Length,
  Operator
} from './styles'

function App() {
  return (
    <Main>
      <Container>
        <Panel>
          <Length>
            <h3>Break Length</h3>
            <Operator>
              <BsFillArrowUpSquareFill />
              <p>1</p>
              <BsFillArrowDownSquareFill />
            </Operator>
          </Length>
          <Length>
            <h3>Session Length</h3>
            <Operator>
              <BsFillArrowUpSquareFill />
              <p>1</p>
              <BsFillArrowDownSquareFill />
            </Operator>
          </Length>
        </Panel>
        <Screen>Teste</Screen>
      </Container>
    </Main>
  );
}

export default App;
