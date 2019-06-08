import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './router';

import './global.css';
// import './page1.css';

// (function () {
//   const root = document.getElementById('page-1');

//   const nodes = {
//     button: root.querySelector('.js-find-button'),
//   };

//   this.nodes.addEventListener('click', () => {
//     root.style.display = 'none';

//   });
// })();


ReactDOM.render(
  <AppRouter />,
  document.getElementById('root'),
);