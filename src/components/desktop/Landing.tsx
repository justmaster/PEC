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
  {
    title: "HISTORY OF EXCELLENCE",
    text:
      "Since the vety establishment of the company in 2001, Petro Energy Caspian East has established ourselves as one of the most perforative and reliable companies in the industry and has been pushing the plank of excellence to this very day. With our experienced staff and time-tested operations, we're looking forward to future challenges and ways to help your business grow."
  },
  {
    title: "TAX FREE",
    text:
      "With majority of our operations concentrated within Sarakhs Free Economic Zone, we're able to provide the best possible rates the market has to offer, all thanks to the fact that there's no tax to be paid on the oil and gas we produce."
  },
  {
    title: "UNIQUE STATUS",
    text:
      "PEC East is a Georgian company, which makes it exempt from the international sanctions and allows a much greater degree of stability. In times of crisis and turmoil, you can always be sure that our operations will remain as reliable as ever."
  }
];
const displays_ir = [
  {
    title: "تاریخ تعالی",
    text:
      "وی ادامه داد: از زمان تأسیس وتی این شرکت در سال 2001 ، پترو انرژی کاسپین شرقی خود را به عنوان یکی از شرکتهای برتر و معتبر در صنعت مستقر کرده است و تا به امروز با تلاش و مجرب خود ما را به سمت تابلوی تعالی سوق داده است. عملیات آزمایش شده ، ما مشتاقانه منتظر چالش های آینده و راه های کمک به رشد کسب و کار شما هستیم. "
  },
  {
    title: "بدون مالیات",
    text:
      "با اکثر فعالیتهای ما در منطقه آزاد اقتصادی سرخس متمرکز شده است ، ما می توانیم بهترین نرخ ممکن بازار را ارائه دهیم ، همه این به لطف این است که هیچ گونه مالیاتی برای نفت و گاز تولیدی ما پرداخت نمی شود. "
  },
  {
    title: "وضعیت منحصر به فرد",
    text:
      "PEC East یک شرکت جورجیایی است که باعث می شود از تحریم های بین المللی معاف شود و درجه ثبات بسیار بیشتری را فراهم می کند. در مواقع بحران و آشفتگی ، شما همیشه می توانید مطمئن باشید که عملیات ما مانند همیشه قابل اعتماد خواهد بود."
  }
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
            <HeaderElement
              className="left"
              style={{ justifyContent: "flex-end" }}
            >
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
                      <PaddedContainer className={`landing ${id === "en" ? "" : "fa"}`}>
                        <Paragraph className={`landing ${id === "en" ? "" : "fa"}`}>{text}</Paragraph>
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
