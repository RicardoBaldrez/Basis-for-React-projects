import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import GS from './styles/GlobalStyles';
import Routers from './routes';

function App() {
  return (
    <BrowserRouter>
      <GS />
      <Header />
      <Routers />
    </BrowserRouter>
  );
}

export default App;
