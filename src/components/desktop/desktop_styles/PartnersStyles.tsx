import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100vw;
  min-height: 60vh;
  height: auto;
  background: #000000;
`;

export const Cover = styled.div`
  width: 100%;
  height: 100%;
  opacity: 1;
  background: url(https://i.imgur.com/GlqxVAt.png) center center no-repeat;
  background-size: cover;
`;

export const Header = styled.header`
  max-width: 100vw;
  padding: 7em 5em 5em 5em;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  // background: red;

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
  // background: green;

  &.left {
  }

  &.right {
    width: 80%;
    flex-wrap: wrap;
    // background: purple;
    div {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 20%;

      &.central {
        height: 60%;
        // background: cyan;
      }
    }
  }

  @media (max-width: 780px) {
    &.left {
      display: none;
    }
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
  justify-content: space-around;
  align-items: center;
  // background: orange;

  @media (max-width: 780px) {
    padding: 1em 1em 5em 1em;
  }
`;

export const PartnerCard = styled.div`
  width: 330px;
  height: 200px;
  border: 1px solid #f9ec3e;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0 15px 0;

  div {
    max-width: 80%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    a {
      img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
      }
    }
  }
`;
