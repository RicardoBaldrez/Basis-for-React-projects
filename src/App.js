import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import history from './services/history';
import Header from './components/Header';
import GS from './styles/GlobalStyles';
import Routers from './routes';

function App() {
  return (
    <Router history={history}>
      <GS />
      <Header />
      <Routers />
    </Router>
  );
}

export default App;
