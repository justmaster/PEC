import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100vw;
  height: auto;
  background: url(https://i.imgur.com/rMKd246.jpg) center center no-repeat;
  background-size: cover;
  overflow: hidden;
  z-index: 1;
  @media (min-width: 1600px) {
    max-height: 99vh;
  }
`;

export const Shade = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

export const Header = styled.header`
  max-width: 100vw;
  padding: 7em 5em 5em 5em;
  min-height: 5vh;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // background: red;

  @media (max-width: 1500px) {
    padding: 3em 5em 1em 5em;
  }
  @media (max-width: 780px) {
    padding: 1em;
  }
`;

export const HeaderElement = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  align-content: center;
  align-items: center;
  flex-wrap: nowrap;
  // background: cyan;
  img {
    height: 100%;
  }
  &.left {
    justify-content: flex-end;
  }

  &.mobileNav {
    display: none;
  }

  @media (max-width: 780px) {
    & + & {
      justify-content: center;
    }
    &.mobileNav {
      display: flex;
    }
    img {
      height: 70%;
    }
  }
`;

export const LanguageSelect = styled.h3`
  width: auto;
  heigth: auto;
  color: white;
  opacity: 0.5;
  font-family: "Open Sans", montserrat;
  font-weight: 300;
  font-size: 30px;
  margin: auto 5px auto 5px;
  transition: all 0.5s;
  cursor: pointer;
  &.active {
    opacity: 1;
  }
  &:hover {
    opacity: 1;
  }

  @media (max-width: 780px) {
    font-size: 15px;
  }
`;

export const Body = styled.div`
  max-width: 100vw;
  height: auto;
  padding: 3em 5em 5em 5em;
  flex-wrap: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  // background: green;

  @media (max-width: 780px) {
    padding: 1em;
  }
`;

export const BodyElement = styled.div`
  width: 50%;
  height: 100%;
  // background: purple;
  display: flex;
  align-content: center;
  flex-wrap: wrap;

  &.right {
    justify-content: flex-end;
  }

  @media (max-width: 780px) {
    width: 100%;
    justify-content: center;
    &.right {
      display: none;
    }
  }
`;

export const DesktopNav = styled.nav`
  li {
    list-style-type: none;
    margin: 5px 0 5px 0;
    text-align: right;
    a {
      text-decoration: none;
      font-family: "Open Sans", sans-serif;
      font-weight: 300;
      font-size: 60px;
      color: white;
      transition: all 0.2s;
      &.persian {
        font-family: "Changa", sans-serif;
      }
      &:hover {
        color: #f9ec3e;
        font-weight: 700;
      }
    }
  }
`;

export const Achievments = styled.div`
  width: 60%;
  display: flex;
  align-content: center;
  justify-content: space-between;
  color: #f9ec3e;

  div {
    display: flex;
    align-content: flex-end;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
      font-family: "Open Sans", montserrat;
      font-weight: 700;
      font-size: 20px;
      margin: 0 0.3em 0 0;
    }
    p {
      font-family: "Open Sans", montserrat;
      font-weight: 300;
      font-size: 15px;
    }
  }

  @media (max-width: 1500px) {
    display: none;
  }
`;

export const Footer = styled.div`
  max-width: 100vw;
  height: 5vh;
  max-height: 5vh;
  padding: 2em 5em 2em 5em;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  // background: gray;
  @media (max-width: 1500px) 
`;

export const FooterElement = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  // background: purple;
`;
