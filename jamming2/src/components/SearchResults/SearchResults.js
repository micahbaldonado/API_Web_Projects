import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';


class SearchResults extends React.Component { // currently created compoenent folders and updated app.css folder.
  // don't forget to change all class instances to className!!!
    render() {
        return (
            <div className="SearchResults">
            <h2>Results</h2>
            <TrackList onAdd = {this.props.onAdd}
                tracks = { this.props.searchResults }
                isRemoval = {false} />
            </div>
        );
    }
}

export default SearchResults;