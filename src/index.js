import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './global.css'

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

document.documentElement.style.setProperty('--black', `#191414`);
document.documentElement.style.setProperty('--grayDK', `#181818`);
document.documentElement.style.setProperty('--green', `#1db954`);
document.documentElement.style.setProperty('--grayLT', '#2B2A30')

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);