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

const Play = styled(BsFillPlayFill).attrs({
  variant: 'button'
})`
  &:hover {
   cursor: pointer;
   color: #56cbdb;
  }
`
const Pause = styled(BsFillPauseFill).attrs({
  variant: 'button'
})`
  &:hover {
   cursor: pointer;
   color: #56cbdb;
  }
`
const Recycle = styled(BsRecycle).attrs({
  variant: 'button'
})`
  &:hover {
   cursor: pointer;
   color: #56cbdb;
  }
`

const MyScreen = () => {
  const {
   time,
   typePlayed,
   formatTime,
   goTimer,
   pauseTimer,
   recycleTimer
  } = useGlobalContext()

  const H4 = styled.h4`
    color: ${time < 60 && '#56cbdb'};
  `
  const H1 = styled.h1`
    color: ${time < 60 && '#56cbdb'}
  `

  return (
   <Screen>
     <Clock>
       <H4>{ typePlayed }</H4>
       <H1>{ formatTime(time) }</H1>
     </Clock>
     <Controllers>
         <Play 
          onClick={() => goTimer()} 
         />
         <Pause 
          onClick={() => pauseTimer()} 
         />
         <Recycle 
          onClick={() => recycleTimer()} 
         />
     </Controllers>
   </Screen>
  );
}

export default MyScreen
