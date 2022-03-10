import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter } from "react-router-dom";
import App from '../src/App';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
//import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>   
      <App />  
  </React.StrictMode>,
  document.getElementById('root')
);
