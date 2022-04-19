import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import { Nav } from './styled';

export default function Header() {
  const buttonClicked = useSelector((state) => state.buttonClicked);

  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/exit">
        <FaSignInAlt size={24} />
      </Link>
      {buttonClicked ? 'Clicado' : 'Não clicado'}
    </Nav>
  );
}
