import styled from 'styled-components';
import { Button } from '@mui/material'

export const Main = styled.main`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: black;
  color: white;
  display: flex;
`

export const Container = styled.section`
  width: 320px;
  height: 440px;
  border: 1px solid hotpink;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 4fr 5fr;
`

export const Panel = styled.div`
  border: 1px solid yellow;
  display: flex;
  flex-direction: column;
`
export const Length = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const Operator = styled.div`
  height: 25px;
  width: 175px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  
`
export const Arrow = styled(Button).attrs({
  variant: 'button'
})`
  
  & > * {
    font-size: 2rem;
  }
  
`

export const Screen = styled.div`
  border: 1px solid green;
`