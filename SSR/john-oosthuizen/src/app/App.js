// npm install @material-ui/core @material-ui/icons

import React from 'react';
import './App.css';                        // inherits and overrides index.css
import Sidebar from '../sidebar/';
import {ITEMS} from '../';
import SocialMediaButtons from '../socialmediabuttons';

// set the select menu option in the state to HOME
function App() {
  return (
    <div class="outer-div">
      <div class="app-header"/>
      <div class="main-grid">
        <div class="main-grid-item-1"> 
          <Sidebar items={ITEMS} />
          <div class="socialmediabuttons">
            <SocialMediaButtons/>
          </div>  
        </div>
        <div class="main-grid-item-2">
          { /* build component called page-area, that invokes other components as per menu ITEMS */ }  
        </div>
      </div>  
    </div>
  );
}

export default App;
