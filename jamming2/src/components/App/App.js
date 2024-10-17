//import logo from '../../logo.svg';
import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

class App extends React.Component { // currently created compoenent folders and updated app.css folder.
  // don't forget to change all class instances to className!!!
  constructor(props) {
    super(props); // this is how you pull in props from the React.Component Class (super of App)
    this.state = {
      searchResults: [],
      playlistName: 'New Playlist',
      playlistTracks: [] // now empty because we only want the search results to appear after user has made a search.
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this); 
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);

  }

  addTrack(track) {
      if(this.state.playlistTracks.find( (savedTrack) => savedTrack.id === track.id)) {
        return;
      }

      this.state.playlistTracks.push(track);
      this.setState({ playlistTracks: this.state.playlistTracks})

    }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    this.setState({playlistTracks: tracks});
  }
  

  updatePlaylistName(name) {
    this.setState({
      playlistName: name
    })
  }

  savePlaylist() {
    const trackUris = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      });
    });
  }

  search(searchTerm) {
    console.log('JJKJKJK')
    console.log(searchTerm)
    Spotify.search(searchTerm).then(searchResults => {
      this.setState({ searchResults: searchResults })
    })
  }


  render() {
    console.log("I am rendering")
    return (
        <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1> 
          <div className="App">
            <SearchBar onSearch = {this.search } />
            <div className="App-playlist">
              <SearchResults onAdd = { this.addTrack } 
                             searchResults = {this.state.searchResults}/>
              <Playlist onRemove = {this.removeTrack} 
                        playlistName = { this.state.playlistName }
                        playlistTracks = {this.state.playlistTracks }
                        onNameChange = { this.updatePlaylistName }
                        onSave = {this.savePlaylist}  />
            </div>
          </div>
        </div>
    )
  }
}

export default App;

