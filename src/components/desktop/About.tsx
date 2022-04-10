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
import { useParams } from "react-router-dom";
import PersonPinCircleIcon from "@material-ui/icons/PersonPinCircle";

export const About = () => {
  const { id } =  useParams<{ id: string }>()
  const [heading, subheading, paragraph, button] =
    id === "en"
      ? [
          "ABOUT US",
          "Brief History",
          "PEC East was established by a team of experienced engineers from Georgia, Ukraine and Russia, in 2001. When we first came to Iran, we've recognized the incredible potential of Persian petrochemical industry and made it our goal to explore it to it's fullest. Nowadays we've become one of the biggest performers in the market in terms of quality & reliability. Thanks to our special status, our operations and products are exempt from international sanctions & are 0% tax, which means that you can trust us with delivering the best rates in the market, even when everyone else fails.",
          "All Products"
        ]
      : [
          "درباره ما",
          "حرکت به سمت آینده",
          "PEC East در سال 2001 توسط تیمی از مهندسین باتجربه از جورجیا ، اوکراین و روسیه تأسیس شد. وقتی برای اولین بار به اینجا آمدیم ، ما پتانسیل باورنکردنی صنعت پتروشیمی پارسی را شناختیم و هدفمان را برای کشف کامل آن دانستیم. امروزه ما از نظر کیفیت و قابلیت اطمینان به یکی از بزرگترین مجریان بازار تبدیل شده ایم. با تشکر از وضعیت ویژه ما ، عملیات و محصولات ما از مجازات های بین المللی معاف هستند و مالیات 0٪ دارند ، این بدان معنی است که شما می توانید با ارائه بهترین نرخ ها در بازار به ما اعتماد کنید ، حتی در صورت عدم موفقیت همه افراد.",
          "همه محصولات"
        ];
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
                <a href="#PRODUCTS" style={{ textDecoration: "none" }}>
                  <Btn className="bgBright">{button}</Btn>
                </a>
              </PaddedContainer>
            </BodySlice>
          </BodyElement>
          <BodyElement className="right"></BodyElement>
        </Body>
      </Wrapper>
    </>
  );
};
