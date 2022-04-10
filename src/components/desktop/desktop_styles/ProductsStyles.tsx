import styled, { keyframes } from "styled-components";

export const Wrapper = styled.section`
  width: 100vw;
  min-height: 60vh;
  height: auto;
  background: #f9ec3e;
`;

export const Header = styled.header`
  max-width: 100vw;
  padding: 5em 5em 5em 5em;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  // background: cyan;

  @media (max-width: 780px) {
    justify-content: center;
    padding: 1em;
  }
`;

export const HeaderElement = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  // background: purple;

  &.left {}

  &.right {
    width: 80%;
    flex-wrap: wrap;
    // background: yellow;
    div {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 20%;

      &.central {
        height: 60%;
        // background: green;
      }
    }
  }

  @media (max-width: 780px) {
    &.left {display: none;}
    &.right {
      .central {
        display: flex;
        justify-content: center;
      }
    }
  }
`;

export const Body = styled.div`
  max-width: 100vw;
  min-height: 20vh;
  height: auto;
  padding: 0 5em 5em 5em;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
  // background: purple;

  @media (max-width: 780px) {
    padding: 1em 1em 5em 1em;
  }
`;

export const ProductCard = styled.div`
  width: 330px;
  height: auto;
  padding: 40px 0 40px 0;
  box-shadow: 10px 10px black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 15px 15px 15px 15px;
  background: white;

  a {
    width: 100%;
    text-decoration: none;
    color: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const wave = keyframes`
  0% {
    transform: translate(0, 0)   
  }
  100% {
    transform: translate(-500px, 0)
  }
`;

export const Fade1 = styled.g`
  animation: ${wave} infinite 15s alternate;
`;

export const Fade2 = styled.g`
  animation: ${wave} infinite 10s alternate;
`;
