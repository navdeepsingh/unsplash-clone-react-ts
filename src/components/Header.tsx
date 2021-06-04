import React from 'react'
import styled from 'styled-components'
import Switcher from './Switcher'

const StyledHeader = styled.header`
  width: 100%;
  background-color: white;
  padding: 10px 20px;
  margin-bottom: 50px;
  border-bottom: 2px solid grey;
  -webkit-box-shadow: 0px 6px 39px -16px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 6px 39px -16px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 6px 39px -16px rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  body.dark & {
    background-color: black;

    h1 {
      color: white;
    }
  }

  h1 {
    color: black;
  }
`
function Header() {
  return (
    <StyledHeader>
      <h1>Unsplash Clone</h1>
      <Switcher />
    </StyledHeader>
  )
}

export default Header
