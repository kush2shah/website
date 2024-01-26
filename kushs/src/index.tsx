import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';

import './css/global/index.scss';
import './assets/fonts/Inter/inter.css'

import App from './components/App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from 'react-router-dom';
import ReactGA from 'react-ga4';

import axios from 'axios';

axios.get('https://kushs.org/api')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
// Initialize Google Analytics
ReactGA.initialize('G-68JR99NH71')
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

const SendAnalytics = () => {
    ReactGA.send({
        hitType: 'pageview',
        page: window.location.pathname
    })
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(SendAnalytics);
