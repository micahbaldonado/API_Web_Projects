import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
  // don't forget to change all class instances to className!!!********************
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  
  handleNameChange(event) {
    this.props.onNameChange(event.target.value) // for some reason event.target.value. 
  }

  render() {  
    return (
            <div className="Playlist">
              <input defaultValue = {'New Playlist'}
                    onChange = { this.handleNameChange } />
              <TrackList onRemove = {this.props.onRemove }     
                        tracks = {this.props.playlistTracks} 
                        isRemoval = {true} />
              <button className="Playlist-save"
                      onClick = { this.props.onSave } >SAVE TO SPOTIFY</button>
            </div>
        );
  }
}

export default Playlist;
