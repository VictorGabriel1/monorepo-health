import styled from "styled-components";
import { DefaultButtonProps } from ".";

export const DefButton = styled.button<DefaultButtonProps>`
  height: 40px;
  width: 50%;
  min-width: 150px;
  max-width: 300px;
  font-size: 20px;
  background-color: ${(props) => (props.disabled ? "grey" : "#744abc")};
  /* border: 2px solid ${({ theme }) => theme.default}; */
  border-radius: 5px;
  color: white;
  &:hover {
    scale: 1.05;
    background-color: #c666ff;
    opacity: 0.9;
  }
`;
