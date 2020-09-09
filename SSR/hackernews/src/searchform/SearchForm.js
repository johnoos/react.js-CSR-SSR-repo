// ---------- 'Search' as ES6 Class Component (ECC) -------------------
import React, { Component } from './node_modules/react';

class SearchForm extends Component {
    componentDidMount() { 
      if(this.input) {
          this.input.focus(); } // refer to "<form ref=" (this.ref) below
      }
    render() {
      const {
        value,
        onChange,
        onSubmit,
        children
    } = this.props;
    let input; // the FSC option for ref & input focus (1/2)
      return (
  // ---------- 'Search' as Function Stateless Component (FSC) ----------  
  //const SearchForm = ({
  //  value,
  //  onChange,
  //  onSubmit,
  //  children
  //}) =>
        <form onSubmit={onSubmit}>
          <input
            type="text" value={value} onChange={onChange}
  //        ref={(node) => input = node}  // the FSC option for ref and input focus  (2/2)
            ref={(node) => { this.input = node; }} // ES6 Class Comp allows us to use this.ref
          />
          <button type="submit">
            {children}
          </button>
        </form>
      );  // part of ES6 Class Component
    }     // part of ES6 Class Component
  }       // part of ES6 Class Component

export default SearchForm;  
