import React from "react";
import {
  Wrapper,
  Body,
  BodyElement,
  BodySlice
} from "./desktop_styles/AboutStyles";
import {
  CircularContainer,
  Dash,
  Subheading,
  Subsubheading,
  Paragraph,
  PaddedContainer,
  Btn
} from "./desktop_styles/Components";
import { useParams, useHistory } from "react-router-dom";
import PersonPinCircleIcon from "@material-ui/icons/PersonPinCircle";

const dummyParagraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export const About = () => {
  const { id } = useParams();
  const history = useHistory()
  const [heading, subheading, paragraph, button] =
    id === "en"
      ? ["ABOUT US", "Lorem Ipsum", dummyParagraph, "All Products"]
      : ["درباره ما", "Lorem Ipsum", dummyParagraph, "همه محصولات"];
  return (
    <>
      <Wrapper id="ABOUT">
        <Body>
          <BodyElement className="left">
            <BodySlice className="filler top">
              <CircularContainer>
                <PersonPinCircleIcon style={{ color: "black" }} />
              </CircularContainer>
              <Dash></Dash>
            </BodySlice>
            <BodySlice className="top titleHolder">
              <div className="divider">
                <Subheading>{heading}</Subheading>
              </div>
            </BodySlice>
            <BodySlice className="filler two"></BodySlice>
            <BodySlice className="textHolder">
              <PaddedContainer className="about">
                <Subsubheading>{subheading}</Subsubheading>
              </PaddedContainer>
              <PaddedContainer className="about">
                <Paragraph className="bgBright">{paragraph}</Paragraph>
              </PaddedContainer>
              <PaddedContainer className="about">
                <a href="#PRODUCTS" style={{textDecoration: "none"}}><Btn className="bgBright" >{button}</Btn></a>
              </PaddedContainer>
            </BodySlice>
          </BodyElement>
          <BodyElement className="right"></BodyElement>
        </Body>
      </Wrapper>
    </>
  );
};
