"use client";

import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 7.5px;
  }

  ::-webkit-scrollbar-track {
    background: #610725;
  }

  ::-webkit-scrollbar-thumb {
    background: #ed145b;
    border-radius: 7.5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #ed145b;
  }

  ::-webkit-overflow-scrolling {
  }
  
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    transition: 0.15s linear; // garente a animação de transição de cores em todos os lugares
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    &::selection {
      color: white;
      background: #eb145d;
    }
  }

  html,
  body {
    height: 100vh;
    height: 100dvh;
    width: 100vw;
    color: white;
    background: #c6a6ff;
    overflow: hidden !important;
    overscroll-behavior-y: contain;
    scroll-behavior: smooth;
  }

  main {
    display: flex;
    height: calc(100vh - 50px);
    height: calc(100dvh - 50px);
    overflow: auto;
    z-index: 1;
  }

  input {
    color: white;
  }

  // todas as divs criadas já serão flex com sentido column por padrão
  div {
    display: flex;
    flex-direction: column;
  }

  // todos os botoes criadas já serão criados sem borda e com pointer ativo
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
  }

  a {
    min-height: 75%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    color: inherit;
    text-decoration: none;
  }

  mark {
    color: #ed145b;
    background: none;
  }
`;

export const Container = styled.div`
  margin: auto;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  min-height: 100%;
`;

export const RowContent = styled.div`
  flex-direction: row;
  font-weight: bold;
  text-align: left;
  width: 100%;
  gap: 10px;
  flex-wrap: wrap;
`;
