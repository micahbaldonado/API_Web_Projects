import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component { // currently created compoenent folders and updated app.css folder.
  // don't forget to change all class instances to className!!!

  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);  

  }
  search(searchTerm) {
    this.props.onSearch(this.state.searchTerm) // wy searchTerm?? term?? isn't this from the app parent?
    // perhpas because props already at method. PROPS method. STATE argument?
    
  }

  handleTermChange(event) {
    //alert('this is working')
    console.log('mini success')
    this.setState( { searchTerm: event.target.value } )
  }

  render() {
        return (
            <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" 
                   onChange = {this.handleTermChange } />
            <button className="SearchButton"
                    onClick = {this.search} >SEARCH</button>
            </div>
        );
    }
};

export default SearchBar;
