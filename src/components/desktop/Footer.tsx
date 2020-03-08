import React from "react";
import { Wrapper } from "./desktop_styles/FooterStyles";
import {
  PaddedContainer,
  Subheading,
  WhiteSpace
} from "./desktop_styles/Components";

export const Footer = () => {
  return (
    <>
      <Wrapper>
        <PaddedContainer className="footer">
          <Subheading className="bgDark">
            © 2001-2020 PETRO ENERGY CASPIAN EAST
          </Subheading>
        </PaddedContainer>
        <WhiteSpace></WhiteSpace>
        <PaddedContainer className="footer">
          <p
            style={{
              fontFamily: "Open Sans",
              color: "white",
              fontSize: "15px"
            }}
          >
            designed & built by Ral Mayer
          </p>
        </PaddedContainer>
      </Wrapper>
    </>
  );
};
