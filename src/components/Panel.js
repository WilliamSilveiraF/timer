import React from "react";
import styled from 'styled-components';
import { Button } from '@mui/material'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { useGlobalContext } from '../context'

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

const MyPanel = () => {
  const { 
   breakLength, 
   sessionLength, 
   addBreak, 
   addSession,
   downBreak,
   downSession
  } = useGlobalContext()
  return (
   <Panel>
     <Length>
       <h3>Break Length</h3>
       <Operator>
         <Arrow 
          style={{
           background: '#262834'
          }}
          onClick={() => addBreak()}
         >
           <AiOutlineArrowUp />
         </Arrow>
         <p>{ breakLength }</p>
         <Arrow
           style={{
           background: '#262834'
           }}
           onClick={() => downBreak()}
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
           onClick={() => addSession()}
         >
           <AiOutlineArrowUp />
         </Arrow>
         <p>{ sessionLength }</p>
         <Arrow
           style={{
           background: '#262834'
           }}
           onClick={() => downSession()}
         >
           <AiOutlineArrowDown />
         </Arrow>
       </Operator>
     </Length>
   </Panel>
  )
}

export default MyPanel;
