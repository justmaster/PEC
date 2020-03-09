import styled from "styled-components";

export const Btn = styled.div`
  width: 30%;
  background: #f9ec3e;
  heigth: auto;
  padding: 1em;
  display: flex;
  justify-content: center;
  align-content: center;
  font-family: "Open Sans", montserrat;
  font-weight: 700;
  transition: all 0.5s;
  position: relative;
  color: black;

  &.bgBright {
    color: white;
    background: black;
    &:hover {
      color: black;
    }
    &::after {
      border: 1px solid rgba(0, 0, 0, 0.5);
    }
  }

  &:hover {
    color: white;
    background: none;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.3s;
    border: 1px solid rgba(255, 255, 255, 0.5);
    transform: scale(1.2, 1.2);
  }
  &:hover {
    &::after {
      opacity: 1;
      transform: scale(1, 1);
    }
  }

  @media (max-width: 780px) {
    width: 80%;
  }
`;

export const WhiteSpace = styled.div`
  width: 100%;
  height: 1px;
`;

export const CircularContainer = styled.div`
  width: 70px;
  height: 60px;
  border: 2px solid black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &.bgDark {
    border: 2px solid white;
  }
`;

export const Dash = styled.div`
  width: 50px;
  height: 2px;
  margin: 0px 25px 0 25px;
  background: black;

  &.bgDark {
    background: white;
  }

  @media (max-width: 780px) {
    display: none;
  }
`;

export const Heading = styled.h1`
  font-family: "Open Sans", montserrat;
  font-weight: 400;
  color: black;
  font-size: 70px;
  max-width: 70%;
  // background: orange;
  &.bgDark {
    color: white;
  }

  @media (max-width: 1500px) {
    font-size: 40px;
  }
  @media (max-width: 780px) {
    text-align: center;
  }
`;

export const Subheading = styled.h3`
  font-family: "Open Sans", montserrat;
  color: black;
  font-weight: 700;
  font-size: 30px;
  // background: orange;

  &.bgDark {
    color: white;
  }

  @media (max-width: 1500px) {
    &.landing {
      font-size: 25px;
    }
  }
`;

export const Subsubheading = styled.h4`
  font-family: "Open Sans", montserrat;
  color: black;
  font-weight: 700;
  font-size: 20px;
  max-width: 60%;
  // background: orange;

  &.bgDark {
    color: white;
  }
  @media (max-width: 780px) {
    text-align: center;
  }
`;

export const Paragraph = styled.p`
  font-family: "Open Sans", montserrat;
  font-size: 15px;
  font-weight: 300;
  width: 70%;
  color: #bdbdbd;
  // background: orange;
  &.fa {
    font-size: 20px;
  }
  &.bgDark {
    color: white;
  }
  &.bgBright {
    color: black;
  }
  &.foot {
    width: 100%;
  }
  &.fillerParagraph{}
  @media (max-width: 1500px) {
    width: 90%;
  }
  @media (max-width: 780px) {
    &.fillerParagraph{
      display: none;
    }
    &.landing {
      color: white;
    }
    text-align: center;
  }
`;

export const PaddedContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 20px 0 20px 0;
  // background: pink;
  &.footer {
    text-align: center;
  }
  &.about {}
  &.contacts{}
  @media (max-width: 1500px) {
    width: 100%;
  }
  @media (max-width: 780px) {
    display: flex;
    justify-content: center;
    &.landing {
      min-height: 150px;
    }
    &.fa {
      min-height: 180px;
    }
`;