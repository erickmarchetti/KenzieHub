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

export const LoginContainer = styled.div`
  display: flex;
  flex-flow: ${({ flexFlow }) => flexFlow};
  justify-content: center;
  align-items: center;
  gap: ${({ gap }) => gap};

  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth};
  padding: ${({ padding }) => padding};
  border-radius: 4px;

  background-color: ${({ hasBackground }) =>
    hasBackground ? "var(--grey-3)" : "transparent"};

  h2 {
    font-size: 18px;
    font-weight: 700;
    color: var(--grey-0);
  }
  span {
    font-size: 10px;
    font-weight: 600;

    color: var(--grey-1);
  }

  label {
    width: 100%;
    font-size: 12px;
    font-weight: 400;
    color: var(--grey-0);
  }
  input {
    height: 38.38px;
    width: 100%;
    padding: 0px 13px;
    border-radius: 3.2px;

    background-color: var(--grey-2);
    color: var(--grey-0);

    &::placeholder {
      color: var(--grey-1);
    }
    &:focus-visible {
      border: 1px solid var(--grey-0);
    }
  }

  .error {
    font-size: 12px;
    width: 100%;
    color: var(--fail);
  }
`
