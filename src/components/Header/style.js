import styled from "styled-components"

export const ThemeHeader = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 72px;
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-flow: ${({ flexFlow }) => flexFlow};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: center;
  align-content: ${({ alignContent }) => alignContent};
  gap: ${({ gap }) => gap};

  width: ${({ width }) => width};
  height: ${({ height }) => height};
  max-width: ${({ maxWidth }) => maxWidth};
  min-height: ${({ minHeight }) => minHeight};
  padding: ${({ padding }) => padding};
  border-radius: 4px;
`
