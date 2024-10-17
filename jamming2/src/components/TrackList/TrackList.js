import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
           {/* <!-- You will add a map method that renders a set of Track components  -->*/ 
            this.props.tracks.map((track) => { // tracks is the child property (hence prop) of the searchresults superclass
                // here, track is each instance of tracks.
                return <Track track = {track} // most important, arguably, ensures that tracks are maintained in track under prop name track
                                onAdd = {this.props.onAdd} 
                                key = {track.id}  
                                name = {track.name} 
                                artist = {track.artist} 
                                album = {track.album} 
                                onRemove = {this.props.onRemove}
                                isRemoval = {this.props.isRemoval} />
            })
           }
            </div>
        );
    }
}

export default TrackList;