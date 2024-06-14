import styled from "styled-components";

export const InputContainer = styled.label`
  width: 90%;
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: 22.5px;
  color: white;
  input {
    height: 40px;
    padding: 0px 5px;
    border-radius: 5px;
    font-size: 15px;
    border: 2px solid white;
    background-color: transparent;
    caret-color: white;
  }
  span {
    position: absolute;
    bottom: -15px;
    font-size: 12.5px;
    color: #ed145b;
  }
`;
