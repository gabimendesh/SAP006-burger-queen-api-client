import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import './styles/global.css';

ReactDOM.render(
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </>,
  document.getElementById('root'),
);
