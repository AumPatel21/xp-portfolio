import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Terminal from './components/Terminal';
import Icons from './components/Icons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Icons />
    <Terminal />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
