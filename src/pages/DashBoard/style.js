import styled from "styled-components"

export const DashBoardContainer = styled.div`
  display: flex;
  flex-flow: ${({ flexFlow }) => flexFlow};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: center;
  gap: ${({ gap }) => gap};

  width: ${({ width }) => width};
  height: ${({ height }) => height};
  max-width: ${({ maxWidth }) => maxWidth};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  border-radius: 4px;

  background-color: ${({ hasBackground }) =>
    hasBackground ? "var(--grey-3)" : "transparent"};

  overflow-y: ${({ overflow }) => overflow};
  position: relative;
`
