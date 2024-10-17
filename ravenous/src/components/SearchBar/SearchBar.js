import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {      // setting up initial state of search bar
            'term' : '',        // referes to the serch term in the search input
            'location' : '',        // referst ot the location to search near from the location input
            'sortBy' : 'best_match'       // represents the selected sorting option to use
        };
        
        this.sortByOptions = { // double check this keyword.
            'Best Match' : 'best_match',
            'Highest Rated' : 'rating',
            'Most Reviewed' : 'review_count'
        }
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    getSortByClass(sortByOption) { // returns the current CSS class for a sorting option. This method will prove useful in providing visual feedback to users of Ravenous.
        if(sortByOption === this.state.sortBy) { // for ths.state, don't have to do this.state['sortBy']; can just do this.state.sortBy
            return 'active';
        } else {
            return '';
        }
    }

    handleSortByChange(sortByOption) {
        this.setState({ 
            sortBy: sortByOption // cannot put semicolon here.
         });

    }

    handleTermChange(event) { // accepts event since both releate to events being triggered
        this.setState({ term: event.target.value });
    }

    handleLocationChange(event) { // accepts event since both releate to being triggered
        this.setState({ location: event.target.value }); // target to access the value from the object.
    }

    handleSearch(event) {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault() // prevents the default action of clicking a link from triggering at the end of the method
    }

    
    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption]
            return <li onClick = { this.handleSortByChange.bind(this, sortByOptionValue) } className =  {this.getSortByClass(sortByOptionValue) } key = {sortByOptionValue}> {sortByOption} </li>
        // Add a className attribute to the <li> element. Set it equal to the return value of the getSortByClass() method. Pass in sortByOptionValue as the argument.
        // This will conditionally style each sort by option, displaying to the user which sorting option is currently selected.    

        /*
        Add an onClick attribute to the <li> element. Set it equal to handleSortByChange.bind(). Pass in two arguments to .bind(): this and sortByOptionValue.
        This will allow us to both bind to the current value of this (as we usually do in the constructor()) but also bind the current sortByOptionValue
        as the first argument to the method call, ensuring the method is called with the appropriate value when clicked. */

        });
        // we use key because react tends to change state a lot
        // this keyword was added now that sortByOptions was added into the SearchBar instantiation

        
    }
     // basically this takes advantage of how sortByOptions is an object!!! It extracts the keys by taking the SPECIFIC OBJECT in question.
    // next the map method, which maps keys onto other keys uses sortByOption variable as a reference and to MAP each value on each other uses the format above

    render() {
        return (
            <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    {this.renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input onChange = { this.handleTermChange } placeholder="Search Businesses" />
                <input onChange = { this.handleLocationChange } placeholder="Where?" />
            </div>
            <div className="SearchBar-submit">
                <a onClick = {this.handleSearch } href = "www.#.com">Let's Go</a>
            </div>
            </div>
        )
    }
}

export default SearchBar;