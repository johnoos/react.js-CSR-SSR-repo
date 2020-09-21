// npm install @material-ui/core @material-ui/icons

import React, {Component} from 'react';

// website menu
import Header from '../header';
import Sidebar from '../sidebar/';

// website content
import {  Home,
          MusicHome,
          MusicCredentials, 
          MusicTheoryFees,
          WebsiteHome,
          WebsiteCredentials,
          WebsiteFees,
          Enquiries24,
          SignupBankingDetails,
          ContactUs }
        from '../content-pages';

const ITEMS = [ 

  { index: 0, name: "home", label: "Home"},

  "divider",

  { name: "music-theory", label: "Music Theory",
      items:  [ { index: 1, name: "music-home", label: "Music theory home" },
                { index: 2, name: "music-credentials", label: "Music credentials" },
                { index: 3, name: "music-theory-fees", label: "Music theory tuition fees" }
              ]             
  },            

  "divider",

  { name: "websites-from-templates", label: "Website creation",
      items:  [ { index: 4, name: "websites-home", label: "Websites from my templates" },
                { index: 5, name: "website-credentials", label: "Website credentials" },
                { index: 6, name: "website-fees", label: "Website fee structure" }
              ] 
  },

  "divider",

  { name: "contact-us", label: "Contact us",
      items:  [ { index: 7, name: "enquiries", label: "Enquiries (24-hour turn-around)" },
                { index: 8, name: "sign-up", label: "Sign-up and banking details" }, 
                { index: 9, name: "contact-info", label: "Contact info" }
              ]
  },

  "divider"
];

const CONTENTCOMPONENTS = [ <Home/>,
                            <MusicHome/>,
                            <MusicCredentials/>, 
                            <MusicTheoryFees/>,
                            <WebsiteHome/>,
                            <WebsiteCredentials/>,
                            <WebsiteFees/>,
                            <Enquiries24/>,
                            <SignupBankingDetails/>,
                            <ContactUs/>              ];

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      selectedPageComponent: <Home/> 
    };
    this.onClick = this.onClick.bind(this); 
  }
  
  onClick(e, item) {
    this.setState({selectedPageComponent: CONTENTCOMPONENTS[item.index]});
  }

  render () {
    return (
      <div class="outer-div">
        <div class="header-container">
          <Header/>
        </div>  
        <div class="sidebar"> 
          <Sidebar items={ITEMS} onClickProp={this.onClick}/>
        </div>
        <div class="keyboard-image-outer">
          <div class="keyboard-image"></div>
        </div>    
        <div class="content-container">
          {this.state.selectedPageComponent}
        </div>
      </div>
    )};
  }  

export default App;
