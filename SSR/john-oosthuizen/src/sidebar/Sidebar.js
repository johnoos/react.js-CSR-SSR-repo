// npx create-react-app <myappwithmenu>
// cd <myappwithmenu>
// npm install @material-ui/core @material-ui/icons
// import List, ListItem, Divider, and Icons - see examples

import React from "react";
import './Sidebar.css';
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import SidebarItem from '../sidebaritem/';

function Sidebar({ items, depthStep, depth, expanded }) {
  return (
    <div className="sidebar" display="inline">
      <List disablePadding dense>
        {items.map((sidebarItem, index) => (
          <React.Fragment key={`${sidebarItem.name}${index}`}>
            {sidebarItem === "divider" 
            ? (
              <Divider style={{ margin: "6px 0" }} />
            ) 
            : (
              <SidebarItem
                depthStep={depthStep}
                depth={depth}
                expanded={expanded}
                item={sidebarItem}
              />
            )}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}

export default Sidebar;