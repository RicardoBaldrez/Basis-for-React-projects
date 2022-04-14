import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    background-color: #eee;
    font-family: sans-serif;
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
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
