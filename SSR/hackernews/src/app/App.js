import React, { Component } from './node_modules/react';

// libraries
import axios from './node_modules/axios';

// components
import SearchForm from '../searchform/index.js';
import SortedPagingTable from '../sortedpagingtable/index.js';
import { GenericButton } from '../buttons/index.js';
import Loading from '../loading/index.js';

// CONSTANTS
import {
  DEFAULT_QUERY,
  DEFAULT_HPP,
  PATH_BASE,
  PATH_SEARCH,
  PARAM_SEARCH, 
  PARAM_PAGE,
  PARAM_HPP, 
} from '../index';

class App extends Component {
  constructor (props) {                         // runs once only - when the app starts
    super(props);
    this.state = {
      results: null,
      searchKey: '',
      searchTerm: DEFAULT_QUERY,
      error: null,
      isLoading: false,
      sortKey: 'NONE',
      isSortReverse: false,
    };
    this.needsToSearchTopStories = this.needsToSearchTopStories.bind(this);
    this.setSearchTopStories = this.setSearchTopStories.bind(this);
    this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);                                          
    this.onDismiss = this.onDismiss.bind(this); 
    this.onSort = this.onSort.bind(this);                                           
  }

  needsToSearchTopStories(searchTerm) { 
    return !this.state.results[searchTerm];
  }

  setSearchTopStories(result) {
    const { hits, page } = result;
    const { searchKey, results } = this.state;
    const oldHits = results && results[searchKey] 
    ? results[searchKey].hits
    : [];
    const updatedHits = [ ...oldHits, ...hits ];
    this.setState({ results: {...results,
                    [searchKey]: { hits: updatedHits, page }
                              }
                  });
  }  

  fetchSearchTopStories(searchTerm, page = 0) {
    this.setState({ isLoading: true }); 
    axios(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
    .then(result => this.setSearchTopStories(result.data))
    .catch(error => this.setState({ error })); 
  }
  
  componentDidMount() {
    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm });
    this.fetchSearchTopStories(searchTerm);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onDismiss(id) { 
    const { searchKey, results } = this.state; 
    const { hits, page } = results[searchKey];
    const isNotId = item => item.objectID !== id;
    const updatedHits = hits.filter(isNotId);
    this.setState({ results: 
                    {...results, [searchKey]: { hits: updatedHits, page } } 
                  });
  }

  onSearchSubmit(event) {
    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm });
    if (this.needsToSearchTopStories(searchTerm)) { 
      this.fetchSearchTopStories(searchTerm);
    }
    event.preventDefault();
  }  

  onSort(sortKey) {
    const isSortReverse = this.state.sortKey === sortKey && !this.state.isSortReverse;
    this.setState({ sortKey, isSortReverse });
  }

  render() {                            // runs at start PLUS every time the component updates
    const {
      searchTerm,
      results,
      searchKey,
      error,
      isLoading,
      sortKey,
      isSortReverse
    } = this.state;
    const page = (
      results && results[searchKey] && results[searchKey].page
                  ) || 0;
    const list = (
      results && results[searchKey] && results[searchKey].hits
                  ) || [];              
    // this is not the best user experience with error handling
    //if (error) {
    // return <p>Something went wrong.</p>;
    //}
    return (                            // JSX ---------------------------------------v  
      <div className="page"> 
        <div className="interactions">
          <SearchForm value={searchTerm} 
                onChange={this.onSearchChange}
                onSubmit={this.onSearchSubmit}
              > Search </SearchForm>
        </div> 
        { error
        ? <div className="interactions">
            <p>Something went wrong.</p> 
          </div>
        : <SortedPagingTable
            list={list}
            sortKey={sortKey}
            isSortReverse={isSortReverse} 
            onSort={this.onSort} 
            onDismiss={this.onDismiss}
          /> }
        <div className="interactions">
          { isLoading
          ? <Loading />
          : <GenericButton 
              onClick={() => this.fetchSearchTopStories(searchKey, page + 1)}>
                More
            </GenericButton>
          }
        </div>                                       
      </div> 
    );                                  // --------------------------------------------^
  } 
} 

export default App; 