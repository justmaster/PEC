import React, { FunctionComponent as FC } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

interface MenuProps {
  open: boolean;
  links: string[];
  structure: string[];
  setOpen: (open: boolean) => void;
}

interface StyledMenuProps {
  open: boolean;
}

const StyledMenu = styled.nav<StyledMenuProps>`
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: black;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  text-align: center;
  align-items: center;
  top: 0;
  left: 0;
  position: absolute;
  transition: transform 0.3s ease-in-out;
  width: 100%;
  a {
      text-decoration: none;
      color: white;
      font-family: "Open Sans", sans-serif;
      font-size: 2rem;
      margin: 20px 0 20px 0;
      font-weight: 700;
      text-align: center;
      &.fa {
        font-family: "Changa", sans-serif;
        font-size: 40px;
      }
  }
`;

export const Menu: FC<MenuProps> = ({ open, setOpen, links, structure }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;
  const { id } =  useParams<{ id: string }>()

  return (
    <StyledMenu open={open} aria-hidden={!isHidden}>
     {links.map((link, i) => <a key={i} href={`#${structure[i]}`} className={id === "en" ? "" : "fa"} onClick={() => setOpen(false)} tabIndex={tabIndex}>{link}</a>)}
    </StyledMenu>
  );
};
