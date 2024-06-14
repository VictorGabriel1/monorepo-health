import styled from "styled-components";

export const TextAreaContainer = styled.label`
  width: 90%;
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: 20px;
  color: white;
  textarea {
    min-height: 150px;
    max-height: 200px;
    padding: 0px 5px;
    border-radius: 5px;
    border: 1px solid rgba(145, 163, 173, 0.42);
    background-color: transparent;
    caret-color: white;
    resize: vertical;
    color: white;
  }
  span {
    position: absolute;
    bottom: -15px;
    font-size: 12.5px;
    color: #ed145b;
  }
`;

export const CharCount = styled.div`
  position: absolute;
  bottom: 5px;
  right: 10px;
  font-size: 12.5px;
  color: #fff;
`;
