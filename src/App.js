import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import history from './services/history';
import Header from './components/Header';
import GS from './styles/GlobalStyles';
import Routers from './routes';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routers />
      <GS />
      <ToastContainer autoClose={3000} className="toast-container" />
    </Router>
  );
}

export default App;
