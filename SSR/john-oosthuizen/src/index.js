import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';                   // overall styling inheritd by App.css, etc
import App from './app/';                // importing THIS app component in order to render it
import * as serviceWorker from './app/serviceWorker';

import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import NotificationsIcon from "@material-ui/icons/Notifications";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import SettingsIcon from "@material-ui/icons/Settings";

// other potentially useful icons
import AttachFileIcon from "@material-ui/icons/AttachFile";

export const ITEMS = [

  { name: "background", label: "Background" 
  },

  "divider",

  { name: "online-theory-lessons", label: "Online music theory lessons",
      items: [
          { name: "tcl-exams", label: "Trinity College exam preparation"},
          { name: "extra-lessons", label: "Extra lessons: learners & students"},
          { name: "beginners", label: "Child and adult beginners"}
      ] 
  },

  "divider",

  { name: "it-websites", label: "Stylish, affordable IT websites",
    items: [
          { name: "like-this-one", label: "Similar design to this website"},
          { name: "customisation", label: "Optional further customisation"}        
    ] 
  },
  
  "divider",

  { name: "contact-us", label: "Contact us",
    items: [
      { name: "enquiries", label: "Enquiries (24-hour turn-around)" },
      { name: "sign-up", label: "Sign-up and banking details" }, 
      { name: "contact-info", label: "Contact info" }
    ]
  },

  "divider"

];

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

serviceWorker.unregister();
