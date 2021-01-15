import React from 'react';
import './SearchBar.css';

const sortByOptions = {
  BestMatch: 'best_match',
  HighestMatch: 'rating',
  MostReviewed: 'review_count'
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption  =>{
      let sortByOptionValue = sortByOption;
       <li key={sortByOptionValue}>{sortByOption}</li> 
      })
}
    render() {
      return(
        <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a href='www.#.com' >Let's Go</a>
        </div>
      </div>

      )
    }
  }


export default SearchBar;