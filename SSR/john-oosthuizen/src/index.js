import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';                   // overall styling inheritd by App.css, etc
import App from './app/';                // importing THIS app component in order to render it
import * as serviceWorker from './app/serviceWorker';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

serviceWorker.unregister();
