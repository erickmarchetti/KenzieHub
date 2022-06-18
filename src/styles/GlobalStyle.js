import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  ul, ol {
    list-style: none;
  }

  :root {
    --grey-0: #F8F9FA;
    --grey-1: #868E96;
    --grey-2: #343B41;
    --grey-3: #212529;
    --grey-4: #121214;
    --disable: #59323F;
    --color-secondary: #FF427F;
    --color-primary: #FF577F;
    --success: #3FE864;
    --fail: #E83F5B;
  }

  html, body {
    height: 100%;
    background-color: var(--grey-4);
  }

  button {
    cursor: pointer;
    transition: 0.3s;
  }

  input, select {
    outline: none;
  }

  #root {
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .logo {
    cursor: pointer;
  }
`

export const FlexContainer = styled.div`
  display: flex;
  flex-flow: ${({ flexFlow }) => flexFlow};
  justify-content: center;
  align-items: center;
  align-content: ${({ alignContent }) => alignContent};
  gap: ${({ gap }) => gap};

  width: ${({ width }) => width};
  height: ${({ height }) => height};
  max-width: ${({ maxWidth }) => maxWidth};
  min-height: ${({ minHeight }) => minHeight};
  padding: ${({ padding }) => padding};
  border-radius: 4px;

  .home__logo {
    width: 90%;
  }

  background-color: ${({ hasBackground }) =>
    hasBackground ? "var(--grey-3)" : "transparent"};
`

export default GlobalStyle
