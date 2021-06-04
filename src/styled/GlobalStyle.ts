import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: white;
    font-family: 'Pacifico', cursive;
    box-sizing: border-box;

    &.dark {
      background-color: black;
    }
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
`

export default GlobalStyle
