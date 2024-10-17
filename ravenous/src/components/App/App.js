import React, { Component } from 'react';
import './App.css';
import logo from '../../logo.svg'; // ../.. have to use two dots since from parent's parent!!!!
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';

/*
const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Bordertown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90

};

const businesses = [business, business, business, business, business, business];

*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
    };
    this.searchYelp = this.searchYelp.bind(this);
  }
  searchYelp(term, location, sortBy) {
    //console.log('Searching Yelp with Pizza, Brooklyn, best_match');
    Yelp.search(term,location,sortBy).then((businesses) => {
      this.setState({ businesses: businesses })
    })
  }
  render() {
    return (
        <div className="App">
          <h1>ravenous</h1>
          <SearchBar searchYelp = { this.searchYelp } />
          <BusinessList businesses = {this.state.businesses}/> 
        </div>
    ); // <BusinessList businesses = {businesses}/>  allows for this.props.businesses to retrive information?
  }
} 

export default App;


/*
Didn't see this: - had to make it myself with the video

The create-react-app command creates a default App component for you.
It includes a render() method along with a return statement. 
We won’t need the default App component, so let’s make some modifications.
Delete everything inside of the return statement.
*/