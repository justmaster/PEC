import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams, useHistory } from "react-router-dom";

import {
  Wrapper,
  Shade,
  Header,
  HeaderElement,
  Body,
  BodyElement,
  Footer,
  FooterElement,
  Achievments,
  LanguageSelect,
  DesktopNav
} from "./desktop_styles/LandingStyles";
import {
  Btn,
  WhiteSpace,
  Heading,
  Subheading,
  Paragraph,
  PaddedContainer
} from "./desktop_styles/Components";
import { Burger } from "../Menu/Burger";
import { Menu } from "../Menu/Menu";

const dummyHeading = "PETRO ENERGY CASPIAN EAST";
const dummyParagraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const dummyParagraph_ir =
  "شما چه لعنتی فقط لعنتی در مورد من گفتی ، ای کوچولو می دانم که من کلاس برتر من را در مأموریت های نیروی دریایی فارغ التحصیل شده ام ، و من در حملات پنهانی متعددی به القوائد درگیر شده ام ، و بیش از 300 مورد قتل تایید شده دارم. من در جنگ گوریل آموزش دیده ام و بهترین تک تیرانداز در کل نیروهای مسلح ایالات متحده هستم.";

const structure = ["HOME", "ABOUT", "PARTNERS", "PRODUCTS", "CONTACTS"];

const structure_ir = ["شروع", "درباره ما", "شرکا", "محصولات", "اطلاعات تماس"];

const [email, phone1, phone2] = [
  "peceast@gmail.com",
  "+98 937 927 9877",
  "+98 937 927 9877"
];

const settings = {
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  adaptiveHeight: true,
  slidesToShow: 1,
  slidesToScroll: 1
};

const displays = [
  { title: "WHY ARE WE STILLE HERE", text: dummyParagraph },
  { title: "JUST TO SUFFER?", text: dummyParagraph },
  { title: "EVERY NIGHT I CAN FEEL MY LEGS", text: dummyParagraph }
];
const displays_ir = [
  { title: "چرا ما هنوز اینجا هستیم؟", text: dummyParagraph_ir },
  { title: "فقط برای رنج؟", text: dummyParagraph_ir },
  { title: "من دیو هستم", text: dummyParagraph_ir }
];

export const Landing = () => {
  const [open, setOpen] = useState(false);

  const { id } = useParams();
  const history = useHistory();
  const carousel_elements = id === "en" ? displays : displays_ir;
  const [home, about, partners, products, contacts] =
    id === "en" ? structure : structure_ir;

  const handleClick = async () => {
    const nextLang = id === "en" ? "ir" : "en";
    history.push(`/${nextLang}/home`);
  };

  return (
    <>
      <Wrapper id="Home">
        <Shade>
          <Header>
            <HeaderElement className="mobileNav">
              <Burger open={open} setOpen={setOpen} />
              <Menu
                open={open}
                setOpen={setOpen}
                links={[home, about, partners, products, contacts]}
                structure={structure}
              />
            </HeaderElement>
            <HeaderElement>
              <img src={require("../../assets/logo.png")} alt="logo" />
            </HeaderElement>
            <HeaderElement className="left">
              <LanguageSelect
                className={id !== "en" ? "active" : "disabled"}
                onClick={handleClick}
              >
                FA
              </LanguageSelect>
              <LanguageSelect
                className={id === "en" ? "active" : "disabled"}
                onClick={handleClick}
              >
                EN
              </LanguageSelect>
            </HeaderElement>
          </Header>
          <Body>
            <BodyElement>
              <PaddedContainer>
                <Heading className="bgDark landing">{dummyHeading}</Heading>
              </PaddedContainer>
              <WhiteSpace></WhiteSpace>
              <div style={{ width: "100%", minHeight: "200px" }}>
                <Slider {...settings}>
                  {carousel_elements.map(({ title, text }) => (
                    <div key={title}>
                      {" "}
                      <PaddedContainer>
                        <Subheading className="bgDark landing">
                          {title}
                        </Subheading>
                      </PaddedContainer>
                      <PaddedContainer>
                        <Paragraph>{text}</Paragraph>
                      </PaddedContainer>
                    </div>
                  ))}
                </Slider>
              </div>
              <WhiteSpace></WhiteSpace>
              <PaddedContainer>
                <a href="#PRODUCTS" style={{ textDecoration: "none" }}>
                  <Btn>{id === "en" ? "All Products" : "همه محصولات"}</Btn>
                </a>
              </PaddedContainer>
              <WhiteSpace></WhiteSpace>
              <PaddedContainer>
                <Achievments>
                  {[email, phone1, phone2].map((e, i) => (
                    <div key={i}>{i === 0 ? <h1>{e}</h1> : <p>{e}</p>}</div>
                  ))}
                </Achievments>
              </PaddedContainer>
            </BodyElement>
            <BodyElement className="right">
              <DesktopNav>
                {[home, about, partners, products, contacts].map(
                  (elmnt, index) => (
                    <li key={index}>
                      <a
                        href={`#${structure[index]}`}
                        className={id === "en" ? "" : "persian"}
                      >
                        {elmnt}
                      </a>
                    </li>
                  )
                )}
              </DesktopNav>
            </BodyElement>
          </Body>
        </Shade>
      </Wrapper>
    </>
  );
};
