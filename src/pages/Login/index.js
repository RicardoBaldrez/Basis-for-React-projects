import React from 'react';
import { toast } from 'react-toastify';

import { Container } from '../../styles/GlobalStyles';

import { Title } from './styled';

export default function Login() {
  const showMessage = () => {
    toast.success('Success!!!');
  };

  return (
    <Container>
      <Title>
        Login
        <small>Lorem, ipsum dolor sit.</small>
      </Title>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button type="button" onClick={showMessage}>
        aaa
      </button>
    </Container>
  );
}
