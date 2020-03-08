import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100vw;
  min-height: 60vh;
  height: auto;
  background: #f9ec3e;
  display: flex;
  flex-wrap: nowrap;
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  flex-wrap: nowrap;
  display: flex;
  justify-content: space-around;
`;

export const BodyElement = styled.section`
  width: 50%;
  // max-width: 50%;
  max-height: 100%;

  &.left {
    padding: 5em 0 5em 5em;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background: #f9ec3e;
    // background: cyan;
  }

  &.right {
    background: url(https://i.imgur.com/NJCNO9L.png) center center no-repeat;
    background-size: cover;
  }

  @media (max-width: 780px) {
    width: 100%;
    justify-content: center;
    &.left {
      padding: 1em 0 1em 0;
    }
    &.right {
      display: none;
    }
  }
`;

export const BodySlice = styled.div`
  width: 80%;
  height: auto;
  // background: purple;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &.filler {
    width: 150px;
    height: 150px;
    // background: orange;
  }

  &.two {

  }

  &.top {
    height: 150px;
  }

  &.titleHolder {
    width: auto;
    width: 70%;
  }

  &.textHolder {
    flex-wrap: wrap;
  }

  .divider {
    width: auto;
    height: 60%;
    display: flex;
    align-items: center;
  }

  @media (max-width: 1500px) {
    width: 400px;
    
  }
  @media (max-width: 780px) {
    justify-content: center;
    &.filler {
      display: none;
    }
    &.textHolder {
      width: 100%;
    }
  }
`;
