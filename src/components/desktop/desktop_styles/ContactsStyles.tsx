import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100vw;
  height: auto;
  background: #eeeeee;
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
  max-height: 100%;
  background: #eeeeee;
  padding: 5em 0 5em 5em;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  // background: cyan;
  &.right {
    justify-content: center;
    padding-right: 5em;
  }

  @media (max-width: 780px) {
    width: 100%;
    padding: 1em;
    display: flex;
    justify-content: center;
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
    // background: red;
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
    &.textHolder {
      width: 350px;
    }
  }
  @media (max-width: 780px) {
    width: 100%;
    &.filler {
      display: none;
    }
    &.titleHolder {
      display: flex;
      justify-content: center;
    }
  }
`;
