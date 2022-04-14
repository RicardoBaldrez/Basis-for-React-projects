import styled, { createGlobalStyle } from 'styled-components';

import { primaryColor, primaryDarkColor } from '../config/colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    color: ${primaryDarkColor};
    background-color: ${primaryDarkColor};
  }

  html, body, #root {
    height: 100%;
  }

  button {
    color: #fff;
    border: none;
    cursor: pointer;
    font-weight: 700;
    border-radius: 4px;
    padding: 8px 20px;
    background-color: ${primaryColor};
  }

  a {
    text-decoration: none;
    color: ${primaryColor};
  }

  ul {
    list-style: none;
  }
`;

export const Container = styled.section`
  padding: 30px;
  max-width: 360px;
  margin: 30px auto;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
