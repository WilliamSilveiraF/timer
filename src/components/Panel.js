import React from "react";
import styled from 'styled-components';
import { Button } from '@mui/material'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';

const Panel = styled.div`
  display: flex;
  flex-direction: column;
`
const Length = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
const Operator = styled.div`
  height: 25px;
  width: 175px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  
`
const Arrow = styled(Button).attrs({
  variant: 'button'
})`
  
  & > * {
    font-size: 2rem;
  }
`

const myPanel = () => {
  return (
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
  )
}

export default myPanel;
