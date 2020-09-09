import React from './node_modules/react';

// import downstream components from files by the same name (from their folders)
import { SortButton } from '../buttons/index.js';
import { GenericButton } from '../buttons/index.js';

// import constants from top level index.js
import {    LARGECOLUMN,
            SMALLCOLUMN,
            SORTS,
} from '..';  

// code for this component
const SortedPagingTable = ({
    list,
    sortKey,
    isSortReverse,
    onSort,
    onDismiss
  }) => {
    const sortedList = SORTS[sortKey](list);
    const reverseSortedList = isSortReverse
    ? sortedList.reverse() 
    : sortedList;
    return(
      <div className="table">
        <div className="table-header"> 
          <span style={{ width: '40%' }}>
            <SortButton 
              sortKey={'TITLE'} 
              onSort={onSort}
            > Title
            </SortButton>
          </span>
          <span style={{ width: '30%' }}> 
            <SortButton
              sortKey={'AUTHOR'}
              onSort={onSort}
            >Author
            </SortButton>
          </span>
          <span style={{ width: '10%' }}>
            <SortButton sortKey={'COMMENTS'} onSort={onSort}
            > Comments
            </SortButton>
          </span>
          <span style={{ width: '10%' }}> 
            <SortButton
              sortKey={'POINTS'}
              onSort={onSort}
            >Points
            </SortButton>
          </span>
          <span style={{ width: '10%' }}>
            Archive
          </span>
        </div>
        {reverseSortedList.map(item =>
        //SORTS[sortKey](list).map(item => 
          <div key={item.objectID} className="table-row"> 
            <span style={LARGECOLUMN}>
              <a href={item.url}>{item.title}</a> </span>
            <span style={{ width: '30%' }}> 
              {item.author} </span>
            <span style={SMALLCOLUMN}>
              {item.num_comments}</span>
            <span style={{ width: '10%' }}>
              {item.points} </span>
            <span style={{ width: '10%' }}>
              <GenericButton
                onClick={() => onDismiss(item.objectID)}
                className="button-inline" > 
                  Dismiss 
              </GenericButton>
            </span>
          </div>
        // )
        )} 
      </div> 
    );
  }

  // export component
  export default SortedPagingTable;