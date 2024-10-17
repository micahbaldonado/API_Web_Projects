import React from 'react';
import './Business.css';


class Business extends React.Component {

 
  render() {
    const { business } = this.props; // Business is rendered, give business the this.props property
     // this makes it so we don't have to rename business.imageSrc
     // since the business object is saved in app I think we can call this.props on it now?

    return (
      <div className="Business">
        <div className="image-container">
          <img src={business.imageSrc} alt=''/>
        </div>
        <h2>{business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>{`${business.state} ${business.zipCode}`}</p>
          </div>
          <div className="Business-reviews">
            <h3>{business.category.toUpperCase()}</h3>
            <h3 className="rating">{`${business.rating} stars`}</h3>
            <p>{`${business.reviewCount} reviews`}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;