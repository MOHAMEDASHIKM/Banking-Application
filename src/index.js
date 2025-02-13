// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

//================= index1 .js====================

import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
const menuitems = [1, 2, 3, 4, 5];
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App menuitems={menuitems} />
  </StrictMode>,
  rootElement
);