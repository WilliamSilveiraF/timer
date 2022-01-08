import styled from 'styled-components';

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
  margin: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 4fr 5fr;
`

