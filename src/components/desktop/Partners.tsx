import React from "react";
import {
  Wrapper,
  Cover,
  Header,
  HeaderElement,
  Body,
  PartnerCard
} from "./desktop_styles/PartnersStyles";
import {
  CircularContainer,
  Dash,
  Subheading,
  Paragraph,
  WhiteSpace
} from "./desktop_styles/Components";
import { useParams } from "react-router-dom";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

interface Partner {
  title: string;
  companySite: string;
  logoURL: string;
}

const dummyParagraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const partnerList = [
  {
    title: "GEORGIAN OIL AND GAS CORPORATION",
    logoURL: require("../../assets/GOAGC.png"),
    companySite: "https://www.gogc.ge/en/"
  },
  {
    title: "NATIONAL IRANIAN OIL COMPANY",
    logoURL: require("../../assets/NIOC.png"),
    companySite: "https://en.nioc.ir/Portal/Home/"
  },
  {
    title: "REOTEK",
    logoURL: require("../../assets/REO.png"),
    companySite: "http://www.reotek.com/en/"
  },
  {
    title: "ZARUBEZHNEFT",
    logoURL: require("../../assets/05_zarub_400_2.jpg"),
    companySite: "https://www.zarubezhneft.ru/en/"
  },
  {
    title: "ASTAN QUDS RAZAVI",
    logoURL: require("../../assets/AQR.png"),
    companySite: "https://globe.aqr.ir/en"
  }
];

export const Partners = () => {
  const { id } = useParams();
  const [heading, paragraph] =
    id === "en" ? ["PARTNERS", dummyParagraph] : ["شرکای ما", dummyParagraph];
  return (
    <>
      <Wrapper id="PARTNERS">
        <Cover>
          {" "}
          <Header>
            <HeaderElement className="left">
              <CircularContainer className="bgDark">
                <AccountBalanceIcon style={{ color: "white" }} />
              </CircularContainer>
              <Dash className="bgDark"></Dash>
            </HeaderElement>
            <HeaderElement className="right">
              <div></div>
              <div className="central">
                <Subheading className="bgDark">{heading}</Subheading>
              </div>
              <div>
                <Paragraph className="fillerParagraph">{paragraph}</Paragraph>
              </div>
            </HeaderElement>
          </Header>
          <Body>
            {partnerList.map(({ title, companySite, logoURL }: Partner) => (
              <PartnerCard key={title}>
                <div>
                  <a href={companySite}>
                    <img src={logoURL} alt={title} />
                  </a>
                </div>
              </PartnerCard>
            ))}
          </Body>
        </Cover>
      </Wrapper>
    </>
  );
};
