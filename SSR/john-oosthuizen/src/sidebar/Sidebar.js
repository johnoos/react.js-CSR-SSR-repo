// npx create-react-app <myappwithmenu>
// cd <myappwithmenu>
// npm install @material-ui/core @material-ui/icons
// import List, ListItem, Divider, and Icons - see examples

import React, {Component} from "react";
import './Sidebar.css';
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import SidebarItem from '../sidebaritem/';

class Sidebar extends Component {
  constructor(props) {
    super(props);  
  }
  
  render () {
    const {items, depthStep, depth, expanded, onClickProp} = this.props;
    // window.alert("(S1): typeof(onClickProp) -> " + typeof(onClickProp));
    const app_onClick_handler = onClickProp;
    // window.alert("(S2): typeof(app_onClick_handler) -> " + typeof(app_onClick_handler));
    return (
      <div className="sidebar" display="inline">
        <List disablePadding dense>
          {items.map((sidebarItem, index) => (
            <React.Fragment key={`${sidebarItem.name}${index}`}>
                {sidebarItem === "divider" 
                ? (
                  <Divider style={{ margin: "6px 0" }} /> ) 
                : (
                  <SidebarItem
                    depthStep={depthStep}
                    depth={depth}
                    expanded={expanded}
                    item={sidebarItem}
                    onClickProp={app_onClick_handler}
                  />
                )}
            </React.Fragment>
          ))}
        </List>
      </div>
    );
  }  
}
export default Sidebar;