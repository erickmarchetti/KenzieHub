import styled from "styled-components"

export const InfoUserContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-content: ${({ alignContent }) => alignContent || "center"};
  align-items: center;
  gap: ${({ gap }) => gap};

  width: ${({ width }) => width};
  height: ${({ height }) => height};
  max-width: ${({ maxWidth }) => maxWidth};
  padding: ${({ padding }) => padding};
  border-top: ${({ border }) => border};
  border-bottom: ${({ border }) => border};
  border-radius: 4px;

  background-color: ${({ hasBackground }) =>
    hasBackground ? "var(--grey-3)" : "transparent"};

  overflow-y: ${({ overflow }) => overflow};
  position: relative;

  h2,
  span {
    width: 100%;
    width: fit-content;
  }
  h2 {
    font-size: 18px;
    font-weight: 700;
    color: var(--grey-0);
  }
  span {
    font-size: 12px;
    font-weight: 400;
    color: var(--grey-1);
  }
`
