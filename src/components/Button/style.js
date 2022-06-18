import styled, { css } from "styled-components"

const colorsTheme = {
  default: "--color-primary",
  default_hover: "--color-secondary",
  disable: "--disable",
  disable_hover: "--disable",
  dark: "--grey-1",
  dark_hover: "--grey-2",
  black: "--grey-3",
  black_hover: "--grey-2"
}

const ThemeButton = styled.button`
  ${({ background, padding, width }) => {
    return css`
      width: ${width};
      padding: ${padding};
      background-color: var(${colorsTheme[background]});

      &:hover {
        background-color: var(${colorsTheme[background + "_hover"]});
      }
    `
  }}

  height: ${({ height }) => height || "38.5px"};
  max-height: ${({ maxHeight }) => maxHeight};
  border-radius: 4.06px;
  font-size: 12px;

  color: white;

  @media (min-width: 430px) {
    height: 48px;
  }
`

export default ThemeButton
