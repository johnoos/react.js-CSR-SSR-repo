import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { sortBy } from 'lodash'; // one of many components for sorting table entries

import App from './app';
import './index.css';

// CONSTANTS

export const DEFAULT_QUERY = 'react';
export const DEFAULT_HPP = '20';

export const PATH_BASE = 'https://hn.algolia.com/api/v1'; 
//export const PATH_BASE = 'https://hn.foo.bar.com/api/v1';     // test error handling
export const PATH_SEARCH = '/search';
export const PARAM_SEARCH = 'query=';
export const PARAM_PAGE = 'page=';
export const PARAM_HPP = 'hitsPerPage=';

export const LARGECOLUMN = { width: '40%', };
export const SMALLCOLUMN = { width: '10%', }; 

export const SORTS = {
    NONE: list => list,
    TITLE: list => sortBy(list, 'title'),
    AUTHOR: list => sortBy(list, 'author'),
    COMMENTS: list => sortBy(list, 'num_comments').reverse(), POINTS: list => sortBy(list, 'points').reverse(),
};

ReactDOM.render(                         // JSX (single parent) vvvvvvvvvvvvvvvv
  <React.StrictMode>
    <h2> Here is the App element...</h2>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);                                       // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

if (module.hot) { module.hot.accept(); } // app refresh instead of browser page refresh

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
