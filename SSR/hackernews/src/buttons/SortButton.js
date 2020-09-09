import React from 'react';
import { GenericButton } from '../buttons';

const SortButton = ({ sortKey, onSort, children }) => // reuses the DiscardButton component
  <GenericButton onClick={() => onSort(sortKey)}>
    {children}
  </GenericButton>

export default SortButton;  