import React from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { BsFillPlayFill, BsFillPauseFill, BsRecycle } from 'react-icons/bs'

import { 
  Main,
  Container,
  Panel,
  Screen,
  Length,
  Operator,
  Arrow,
  Clock,
  Controllers
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

        <Screen>
          <Clock>
            <h4>Session</h4>
            <h1>60 : 00</h1>
          </Clock>
          <Controllers>
              <BsFillPlayFill />
              <BsFillPauseFill />
              <BsRecycle />
          </Controllers>
        </Screen>
      </Container>
    </Main>
  );
}

export default App;
