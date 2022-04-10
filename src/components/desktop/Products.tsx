import React from "react";
import {
  Wrapper,
  Header,
  HeaderElement,
  Body,
  ProductCard,
  Fade1,
  Fade2
} from "./desktop_styles/ProductsStyles";
import {
  CircularContainer,
  Dash,
  Subheading,
  Paragraph,
  Btn
} from "./desktop_styles/Components";
import { useParams } from "react-router-dom";
import InvertColorsIcon from "@material-ui/icons/InvertColors";
import ProductFile from "../subcomponents/productFile";



export const Products = () => {
  const { id } = useParams<{ id: string }>()
  const [heading, paragraph, button] =
    id === "en"
      ? [
          "PRODUCTS",
          "Please contact us for inquiries regarding availability & prices.",
          "Certificate"
        ]
      : [
          "محصولات ما",
          "لطفا برای سوالات مربوط به در دسترس بودن و قیمت با ما تماس بگیرید.",
          "گواهی"
        ];

  return (
    <Wrapper id="PRODUCTS">
      <Header>
        <HeaderElement className="left">
          <CircularContainer>
            <InvertColorsIcon style={{ color: "black" }} />
          </CircularContainer>
          <Dash></Dash>
        </HeaderElement>
        <HeaderElement className="right">
          <div></div>
          <div className="central">
            <Subheading>{heading}</Subheading>
          </div>
          <div>
            <Paragraph className="bgBright fillerParagraph">
              {paragraph}
            </Paragraph>
          </div>
        </HeaderElement>
      </Header>
      <Body>
        <ProductFile firstColor={"red"} secondColor={"blue"} mainColor={"orange"} title={"А80"} link={"https://drive.google.com/file/d/1Z8k-UflWumwUULA4UzG_-PqGhPoqaIEZ/view?usp=sharing"} button={button} textColor={"white"} textSize={40} x="100" y="200" />
        <ProductFile firstColor={"blue"} secondColor={"blue"} mainColor={"yellow"} title={"Сла́ва Украї́ні"} link={"https://www.youtube.com/watch?v=lu8m5FA2nL8"} button={"#StandWithUkraine"} textColor={"black"} textSize={25} x="65" y="200" />
        <ProductFile firstColor={"red"} secondColor={"blue"} mainColor={"orange"} title={"Gazoil"} link={"https://drive.google.com/file/d/1foDGhbwKmiZT2AIUu6tvhP-PahafhdJN/view?usp=sharing"} button={button} textColor={"white"} textSize={40} x="90" y="200" />
      </Body>
    </Wrapper>
  );
};


// return (
//   <Wrapper id="PRODUCTS">
//     <Header>
//       <HeaderElement className="left">
//         <CircularContainer>
//           <InvertColorsIcon style={{ color: "black" }} />
//         </CircularContainer>
//         <Dash></Dash>
//       </HeaderElement>
//       <HeaderElement className="right">
//         <div></div>
//         <div className="central">
//           <Subheading>{heading}</Subheading>
//         </div>
//         <div>
//           <Paragraph className="bgBright fillerParagraph">
//             {paragraph}
//           </Paragraph>
//         </div>
//       </HeaderElement>
//     </Header>
//     <Body>
//       {data?.products.map(({ id, title, certificate, colors }: Product) => (
//         <ProductCard key={id}>
//           <svg
//             version="1.1"
//             id="drop"
//             x="0px"
//             y="0px"
//             viewBox="0 0 298 298"
//             width="200"
//             height="300"
//           >
//             <defs>
//               <clipPath id="droplet-cut-off-bottom">
//                 <path d="M149,0c0,0-99,116.834-99,199c0,54.676,44.324,99,99,99s99-44.324,99-99C248,116.834,149,0,149,0z" />
//               </clipPath>
//             </defs>
//             <path
//               d="M149,0c0,0-99,116.834-99,199c0,54.676,44.324,99,99,99s99-44.324,99-99C248,116.834,149,0,149,0z"
//               fill={colors[0]}
//             />
//             <g clipPath="url(#droplet-cut-off-bottom)">
//               <svg y="-110" x="10">
//                 <Fade2 fill={colors[1]}>
//                   {" "}
//                   <path d="M0,224L40,208C80,192,160,160,240,170.7C320,181,400,235,480,229.3C560,224,640,160,720,122.7C800,85,880,75,960,74.7C1040,75,1120,85,1200,101.3C1280,117,1360,139,1400,149.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z" />
//                 </Fade2>
//               </svg>
//               <svg y="-90">
//                 <Fade1 fill={colors[2]}>
//                   <path d="M0,224L40,208C80,192,160,160,240,170.7C320,181,400,235,480,229.3C560,224,640,160,720,122.7C800,85,880,75,960,74.7C1040,75,1120,85,1200,101.3C1280,117,1360,139,1400,149.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z" />
//                 </Fade1>
//               </svg>
//               <circle cx="150" cy="350" r="200" fill={colors[2]} />
//               <text
//                 fontFamily="Open Sans"
//                 fontWeight={700}
//                 fontSize={title.length > 3 ? 50 : 80}
//                 fill="white"
//                 x="75"
//                 y="200"
//               >
//                 {title}
//               </text>
//             </g>
//           </svg>
//           <a href={certificate} target="_blank">
//             <Btn className="bgBright" style={{ width: "50%" }}>
//               {button}
//             </Btn>
//           </a>
//         </ProductCard>
//       ))}
//     </Body>
//   </Wrapper>
// );
// };