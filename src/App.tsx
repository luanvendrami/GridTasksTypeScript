import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import TheRoutes from './routes';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <TheRoutes />
    </BrowserRouter>
  );
}

export default App;
