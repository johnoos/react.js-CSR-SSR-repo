import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';                   // overall styling inheritd by App.css, etc
import App from './app/App';                // importing THIS app component in order to render it
import * as serviceWorker from './app/serviceWorker';

import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import NotificationsIcon from "@material-ui/icons/Notifications";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import SettingsIcon from "@material-ui/icons/Settings";

import AttachFileIcon from "@material-ui/icons/AttachFile";

export const ITEMS = [

  { name: "home", label: "Home", Icon: HomeIcon },

  { name: "billing",label: "Billing", Icon: ReceiptIcon,
      items: [
        { name: "statements", label: "Statements"},
        { name: "reports", label: "Reports"}
      ]
  },

  "divider",

  { name: "settings", label: "Settings", Icon: SettingsIcon,
      items: [
        { name: "profile", label: "Profile" },
        { name: "insurance", label: "Insurance"},
        "divider",
        { name: "notifications", label: "Notifications", Icon: NotificationsIcon,
            items: [
              { name: "email", label: "Email"},
              { name: "desktop", label: "Desktop", Icon: DesktopWindowsIcon,
                  items: [
                    { name: "schedule", label: "Schedule" },
                    { name: "frequency", label: "Frequency" }
                  ]
              },
              { name: "sms", label: "SMS" }
            ]
        }
      ]
  }

];

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

serviceWorker.unregister();
