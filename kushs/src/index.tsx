import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/index.css';

import App from './components/App';
import reportWebVitals from './reportWebVitals';

import axios from 'axios';

axios.get('http://kushs.org/api')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
