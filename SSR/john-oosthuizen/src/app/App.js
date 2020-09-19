// npm install @material-ui/core @material-ui/icons

import React, {Component} from 'react';

// website menu
import Sidebar from '../sidebar/';

// website content
import {  Background,
          PedagogicalApproach, 
          FeesMusicTheory,
          TemplateWebsite,
          FeesWebsites,
          Enquiries24,
          SignupBankingDetails,
          ContactUs }
        from '../content-pages';

// social media share buttons
import SocialMediaButtons from '../socialmediabuttons';

let selectedPageComponent = <Background/> ;



// constants (customisation area)

const ITEMS = [ 

  { index: 0, name: "background", label: "Background" },

  "divider",

  { name: "online-theory-lessons", label: "Online music theory lessons",
      items: [
          { index: 1, name: "pedagogical-approach", label: "Pedagogical approach" },
          { index: 2, name: "tuition-fees", label: "Tuition fees" }
      ] 
  },

  "divider",

  { name: "it-websites", label: "Stylish, affordable IT websites",
    items: [
          { index: 3, name: "template-website", label: "Template websites like this one" },
          { index: 4, name: "website-fees", label: "Website fees" }        
    ] 
  },
  
  "divider",

  { name: "contact-us", label: "Contact us",
    items: [
      { index: 5, name: "enquiries", label: "Enquiries (24-hour turn-around)" },
      { index: 6, name: "sign-up", label: "Sign-up and banking details" }, 
      { index: 7, name: "contact-info", label: "Contact info" }
    ]
  }
];

const CONTENTCOMPONENTS = [ <Background/>,
                            <PedagogicalApproach/>, 
                            <FeesMusicTheory/>,
                            <TemplateWebsite/>,
                            <FeesWebsites/>,
                            <Enquiries24/>,
                            <SignupBankingDetails/>,
                            <ContactUs/>              ];

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      selectedPageComponent: <Background/>, 
      oneOther: "initialValue" 
    };

    // any bindings
    this.onClick = this.onClick.bind(this); 
  }
  
  onClick(e, item) {
    // window.alert("A3: item -> " + JSON.stringify(item));
    this.setState({selectedPageComponent: CONTENTCOMPONENTS[item.index]});
  }

  render () {
    // window.alert("(A1):typeof(this.onClick) -> " + typeof(this.onClick));
    return (
      <div class="outer-div">
        <div class="app-header">
          <div class="app-header-item-1">
            <SocialMediaButtons url={"http://www.google.com"} 
                    quote={"Music theory tuition by videoconference from Stellenbosch"} 
                    hashtag={"#MusicTheoryByVideoconference"} />
          </div> 
        </div>  
        <div class="main-grid">
          <div class="main-grid-item-1"> 
            <Sidebar items={ITEMS} onClickProp={this.onClick} />
            <div class="keyboard"/>
          </div>
          <div class="main-grid-item-2">
            {this.state.selectedPageComponent} 
          </div>
        </div>  
      </div>
    )};
  }  

export default App;
