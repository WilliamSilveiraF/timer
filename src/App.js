import React from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { Button } from '@mui/material'
import { 
  Main,
  Container,
  Panel,
  Screen,
  Length,
  Operator,
  Arrow
} from './styles'

function App() {
  return (
    <Main>
      <Container>
        <Panel>
          <Length>
            <h3>Break Length</h3>
            <Operator>
              <Arrow style={{
                background: '#262834'
                }}
              >
                <AiOutlineArrowUp />
              </Arrow>
              <p>1</p>
              <Arrow
                style={{
                background: '#262834'
                }}
              >
                <AiOutlineArrowDown />
              </Arrow>
            </Operator>
          </Length>
          <Length>
            <h3>Session Length</h3>
            <Operator>
              <Arrow
                style={{
                background: '#262834'
                }}
              >
                <AiOutlineArrowUp />
              </Arrow>
              <p>1</p>
              <Arrow
                style={{
                background: '#262834'
                }}
              >
                <AiOutlineArrowDown />
              </Arrow>
            </Operator>
          </Length>
        </Panel>
        <Screen>Teste</Screen>
      </Container>
    </Main>
  );
}

export default App;
