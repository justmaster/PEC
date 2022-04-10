import React, { FunctionComponent as FC } from "react";
import styled from "styled-components";

interface BurgerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

interface StyledProps extends React.HTMLProps<HTMLButtonElement> {
  open: boolean;
}

const StyledBurger = styled.button<StyledProps>`
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  outline: none;

  span {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "yellow" : "white")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const Burger: FC<BurgerProps> = ({ open, setOpen }) => {
  return (
    <StyledBurger
      aria-label="Toggle menu"
      open={open}
      onClick={() => setOpen(!open)}
    >
      <span />
      <span />
      <span />
    </StyledBurger>
  );
};
