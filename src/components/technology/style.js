import styled from "styled-components"

export const TechCard = styled.li`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 49px;
  min-height: 49px;
  padding: 0 18px;
  border-radius: 4px;

  cursor: pointer;
  transition: 0.4s;

  background-color: var(--grey-4);
  &:hover {
    background-color: var(--grey-2);
  }

  h2 {
    font-size: 14px;
    font-weight: 700;
    color: var(--grey-0);

    margin-right: auto;
  }
  span {
    font-size: 12px;
    font-weight: 400;
    color: var(--grey-1);

    margin-right: 25px;
  }
  button {
    width: fit-content;
    height: fit-content;
    background-color: transparent;
  }
  img {
    width: 13px;
    height: 12px;
    color: var(--grey-0);
  }

  @media (max-width: 320px) {
    h2 {
      font-size: 12px;
    }
  }
`
