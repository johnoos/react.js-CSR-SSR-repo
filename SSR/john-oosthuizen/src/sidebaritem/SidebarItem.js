import React from 'react';
import './SidebarItem.css';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Collapse from "@material-ui/core/Collapse";

function SidebarItem({ depthStep = 10, depth = 0, expanded, item, onClickProp, ...rest }) {
  const [collapsed, setCollapsed] = React.useState(true);
  const { label, items} = item;

  function toggleCollapse() {
    setCollapsed(prevValue => !prevValue);
  }
  
  function onClick(e) {           // from ListItem component see line 46
    // if the clicked item has subitems, toggle 
    if (Array.isArray(items)) {   // gets items from deconstruction in line 12
      // window.alert("SI1: TOGGLE ITEM WITH SUBITEMS CLICKED -> "+ JSON.stringify(item));
      toggleCollapse();
    }
    // either a subitem, or item with index=0 was clicked  
    else {
      // window.alert("(SI2): PAGE ITEM CLICKED -> " + JSON.stringify(item));
      // window.alert("(SI3): typeof(onClickProp) -> " + typeof(onClickProp));
      onClickProp(e, item);        // gets item from line 10, and e from onClick event in line 19
    }
  }

  let expandIcon;

  if (Array.isArray(items) && items.length) {
    expandIcon = !collapsed 
    ? ( <ExpandLessIcon
            className={
              "sidebar-item-expand-arrow sidebar-item-expand-arrow-expanded" } /> ) 
    : ( <ExpandMoreIcon className="sidebar-item-expand-arrow" /> );
  }

  // gets onClickProp from line 10
  // window.alert("(SI4): FROM SIDEBARITEM: typeof(onClickProp) -> " + typeof(onClickProp));

  return (
    <>
      <ListItem className="sidebar-item"
                onClick={onClick}    
                button
                dense
                {...rest} >
        <div style={{ paddingLeft: depth * depthStep }}
              className="sidebar-item-content" >
          <div className="sidebar-item-text">{label}</div>
        </div>
        {expandIcon}
      </ListItem>
      <Collapse in={!collapsed} timeout="auto" unmountOnExit>
        {Array.isArray(items) 
        ? ( <List disablePadding dense>
              {items.map((subItem, index) => (
                       <React.Fragment key={`${subItem.name}${index}`}>
                          {subItem === "divider" 
                          ? ( <Divider style={{ margin: "6px 0" }} /> ) 
                          : ( <SidebarItem
                                depth={depth + 1}
                                depthStep={depthStep}
                                item={subItem}
                                onClickProp={onClickProp}
                              />  )
                          }
                        </React.Fragment>
                     )
                   )
                }
            </List> ) 
        : null}
      </Collapse>
    </>
  );
}

export default SidebarItem;