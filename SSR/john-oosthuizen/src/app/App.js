// npm install @material-ui/core @material-ui/icons

import React from 'react';
import './App.css';                        // inherits and overrides index.css
import Sidebar from '../sidebar/';
import {ITEMS} from '../';

// function onClick(e, item) {
//  window.alert(JSON.stringify(item, null, 2));
// }

// set the select menu option in the state to HOME
function App() {
  return (
    <div className="App">
      <Sidebar items={ITEMS}/>
      <div class="sharethis-inline-share-buttons" style={{left:0,bot:0}}></div>      
    </div>
  );
}

export default App;
