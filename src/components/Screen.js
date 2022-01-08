import React from "react";
import styled from 'styled-components';
import { BsFillPlayFill, BsFillPauseFill, BsRecycle } from 'react-icons/bs';
import { useGlobalContext } from "../context";

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

const Clock = styled.div`
  line-height: 12px;
  border-radius: 36px;
  text-align: center;
  width: 200px;
  border: 10px solid #262834;

  & > h1 {
    font-size: 2.5rem;
  }
  & > h4 {
    font-size: 1.5rem;
  }
`
const Controllers = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
  & > * {
    font-size: 2rem;
  }
`

const MyScreen = () => {
  const { timer, formatTime } = useGlobalContext()
  return (
   <Screen>
     <Clock>
       <h4>Session</h4>
       <h1>{ formatTime(timer.time) }</h1>
     </Clock>
     <Controllers>
         <BsFillPlayFill onClick={() => console.log({play: true, time: '00 : 00'})} />
         <BsFillPauseFill onClick={() => console.log({play: false, time: '00 : 00'})} />
         <BsRecycle onClick={() => console.log({play: false, time: '00 : 00'})} />
     </Controllers>
   </Screen>
  );
}

export default MyScreen
