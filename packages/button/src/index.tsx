import React from "react";
import styled from "styled-components";
interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  isSelected?: boolean;
}
const Button:React.FC<Props> = ({ onClick, children }:Props) => (
  <Component onClick={onClick}>
    {children}
  </Component>
);

const Component = styled.button<{ isSelected?: boolean}>`
border: 0;
background-color: ${({ isSelected }) => (isSelected ? "rebeccapurple" : "hotpink")};
color: ${({ isSelected }) => (isSelected ? "white" : "black")};
padding: 12px 24px;
margin: 12px;
border-radius: 3px;
`;

export default Button;