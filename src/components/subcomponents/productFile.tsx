import { randomBytes } from 'crypto';
import React from 'react';
import {
    Wrapper,
    Header,
    HeaderElement,
    Body,
    ProductCard,
    Fade1,
    Fade2
  } from "../desktop/desktop_styles/ProductsStyles";

  import {
    Btn
  } from "../desktop/desktop_styles/Components";

  interface AppProps {
    firstColor: string, 
    secondColor: string, 
    mainColor: string, 
    title: string, 
    link: string, 
    button: string,
    textColor: string,
    x: string, 
    y: string,
    textSize: number,
  }

function ProductFile({      
    firstColor, 
    secondColor, 
    mainColor, 
    title, 
    link, 
    button,
    textColor,
    x,
    y,
    textSize,

}: AppProps
){
    return (
        <ProductCard>
                    <svg
                        version="1.1"
                        id="drop"
                        x="0px"
                        y="0px"
                        viewBox="0 0 298 298"
                        width="200"
                        height="300"
                    >
                    <defs>
                        <clipPath id="droplet-cut-off-bottom">
                        <path d="M149,0c0,0-99,116.834-99,199c0,54.676,44.324,99,99,99s99-44.324,99-99C248,116.834,149,0,149,0z" />
                        </clipPath>
                    </defs>
                    <path
                        d="M149,0c0,0-99,116.834-99,199c0,54.676,44.324,99,99,99s99-44.324,99-99C248,116.834,149,0,149,0z"
                        fill={firstColor}
                    />
                    <g clipPath="url(#droplet-cut-off-bottom)">
                        <svg y="-110" x="10">
                        <Fade2 fill={secondColor}>
                            {" "}
                            <path d="M0,224L40,208C80,192,160,160,240,170.7C320,181,400,235,480,229.3C560,224,640,160,720,122.7C800,85,880,75,960,74.7C1040,75,1120,85,1200,101.3C1280,117,1360,139,1400,149.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z" />
                        </Fade2>
                        </svg>
                        <svg y="-90">
                        <Fade1 fill={mainColor}>
                            <path d="M0,224L40,208C80,192,160,160,240,170.7C320,181,400,235,480,229.3C560,224,640,160,720,122.7C800,85,880,75,960,74.7C1040,75,1120,85,1200,101.3C1280,117,1360,139,1400,149.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z" />
                        </Fade1>
                        </svg>
                        <circle cx="150" cy="350" r="200" fill={mainColor} />
                        <text
                        fontFamily="Railway"
                        fontWeight={700}
                        fontSize={textSize}
                        fill={textColor}
                        // selfAlign="center"
                        x={x}
                        y={y}
                        >
                        {title}
                        </text>
                    </g>
                    </svg>
                    <a href={link} target="_blank">
                    <Btn className="bgBright" style={{ width: "50%" }}>
                        {button}
                    </Btn>
                    </a>
                </ProductCard>
            );
        }

export default ProductFile;