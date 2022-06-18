import styled from "styled-components"

export const FlexForm = styled.form`
  display: flex;
  flex-flow: ${({ flexFlow }) => flexFlow};
  justify-content: center;
  align-items: center;
  gap: ${({ gap }) => gap};

  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth};
  padding: ${({ padding }) => padding};
  border-radius: 4px;
`

export const RegisterContainer = styled.div`
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

  .register__logo {
    width: 122px;
  }

  h2 {
    font-size: 18px;
    font-weight: 700;
    color: var(--grey-0);
  }
  span {
    font-size: 12px;
    font-weight: 600;

    color: var(--grey-1);
  }

  label {
    width: 100%;
    font-size: 12px;
    font-weight: 400;
    color: var(--grey-0);
  }
  input,
  select {
    height: 38.38px;
    width: 100%;
    padding: 0px 13px;
    border-radius: 3.2px;
    appearance: none;

    background-color: var(--grey-2);
    color: var(--grey-0);

    &::placeholder {
      color: var(--grey-1);
    }
    &:focus-visible {
      border: 1px solid var(--grey-0);
    }
  }

  select {
    color: var(--grey-1);
  }
  .select__arrow {
    position: absolute;
    right: 12px;
    bottom: 10px;
    width: 15px;
    padding: 3px 0px 3px 3px;
    box-sizing: content-box;
    background-color: var(--grey-2);
  }

  .error {
    font-size: 12px;
    width: 100%;
    color: var(--fail);
  }
`
