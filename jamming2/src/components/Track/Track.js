import React from 'react';
//import ReactDOM from 'react-dom';
import './Track.css';

class Track extends React.Component {
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    addTrack() {
        this.props.onAdd(this.props.track) // track is a universal child quality now; maybe need to make sure it's defined that way.
    }

    removeTrack() {
        console.log('removeTrack < Track component')
        this.props.onRemove(this.props.track) 
        // for some reason onRemove is a method????
        // NOT SURE how this works EXACTLY.
    }

    renderAction() {
            //console.log("I made it this Far!") 
            if(this.props.isRemoval) { // had to use this.props.isRemoval, not this.isRemoval. (is isRemoval in a superclass?)
                return <button className = 'Track-Action' onClick = { this.removeTrack } >-</button> // classname, not class.
            } else {
                return <button className = 'Track-Action' onClick = { this.addTrack }>+</button>
            }
        }
    render() {
        console.log("TRACK INFO")
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{ this.props.track.name }</h3>
                    <p>{ this.props.track.artist } | { this.props.track.album }</p>
                </div>
                <button className="Track-action">{/* <!-- + or - will go here --> */ }</button>
                { this.renderAction() } 

            </div>
        );
    }
}

export default Track;