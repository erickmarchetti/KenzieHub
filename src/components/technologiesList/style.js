import styled from "styled-components"

export const TechListContainer = styled.div`
  display: flex;
  flex-flow: ${({ flexFlow }) => flexFlow};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: center;
  gap: ${({ gap }) => gap};

  width: ${({ width }) => width};
  height: ${({ height }) => height};
  max-width: ${({ maxWidth }) => maxWidth};
  max-height: ${({ maxHeight }) => maxHeight};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  border-radius: 4px;

  background-color: ${({ hasBackground }) =>
    hasBackground ? "var(--grey-3)" : "transparent"};

  overflow-y: ${({ overflow }) => overflow};
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }

  h3 {
    font-size: 16px;
    font-weight: 600;
    color: var(--grey-0);
  }
  img {
    width: 10px;
    height: 10px;
  }
`
