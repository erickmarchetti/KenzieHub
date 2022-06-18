import styled from "styled-components"

export const ThemeModal = styled.div`
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
  border-radius: ${({ borderRadius }) => borderRadius || "4px"};

  background-color: ${({ backgroundColor }) => backgroundColor};

  overflow-y: ${({ overflow }) => overflow};
  position: ${({ position }) => position};

  h3 {
    font-size: 14px;
    font-weight: 700;
    color: var(--grey-0);
  }
  img {
    width: 11px;
    height: 26px;
  }

  form {
    display: flex;
    flex-flow: row wrap;
    gap: 17px;

    width: 100%;
    position: relative;
  }

  label,
  input,
  select {
    width: 100%;
  }

  input,
  select {
    height: 48px;
    border-radius: 4px;
    padding: 0 16px;

    background-color: var(--grey-2);

    &:focus-visible {
      border: 1px solid var(--grey-0);
    }
    &::placeholder {
      color: var(--grey-1);
    }
  }

  label {
    font-size: 12px;
    font-weight: 400;
    color: var(--grey-0);
  }
  .active {
    color: var(--grey-0);
  }
  select {
    appearance: none;
  }
  form img {
    position: absolute;
    bottom: 76px;
    right: 16px;
  }

  @media (max-width: 430px) {
    form img {
      bottom: 66.5px;
    }
  }
`
