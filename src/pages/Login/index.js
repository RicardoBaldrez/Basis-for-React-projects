import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';

import { Title } from './styled';

export default function Login() {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();

    dispatch({
      type: 'BUTTON_CLICKED',
    });
  };

  return (
    <Container>
      <Title>
        Login
        <small>Lorem, ipsum dolor sit.</small>
      </Title>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button type="button" onClick={handleClick}>
        aaa
      </button>
    </Container>
  );
}
