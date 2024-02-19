import '../node_modules/jquery/dist/jquery';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Component/App/App';
import reportWebVitals from './reportWebVitals';
import MiniDashboard2 from './Component/other/MiniDashboard2';








//npm install react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


    <App />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
