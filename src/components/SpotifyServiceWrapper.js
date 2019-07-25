import React, {Component} from 'react';
import MusicPage from "./MusicPage/MusicPage";

class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentlyPlaying: {
        name: "",
        artist: "",
        albumName: "",
        albumArt: undefined,
        paused: true
      },
      deviceId: "",
      ready: false,
      transfered: false,
      token: this.props.token
    };

    this.playerCheckInterval = null;
    this.playTrack = this.playTrack.bind(this);
    this.getAlbumCoverUrls = this.getAlbumCoverUrls.bind(this);
  }

  checkForPlayer() {
    if (window.Spotify !== null) {
      clearInterval(this.playerCheckInterval);
      this.player = new window.Spotify.Player({
        name: "Rock 100",
        getOAuthToken: cb => {
          cb(this.props.token);
        },
      });

      window.Spotify.Player.prototype.playTrack = this.playTrack;
      window.Spotify.Player.prototype.getAlbumCoverUrls = this.getAlbumCoverUrls;
      this.createEventHandlers();
      this.player.connect();
    }
  }

  transferPlaybackHere() {
    const {deviceId, token} = this.state;
    fetch("https://api.spotify.com/v1/me/player", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        device_ids: [deviceId],
        play: false,
      }),
    });
  }

  playTrack(spotifyURI) {
    const {deviceId, token} = this.state;
    fetch("https://api.spotify.com/v1/me/player/play", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        device_ids: [deviceId],
        context_uri: `spotify:album:${spotifyURI}`
      }),
    });
  }

  getAlbumCoverUrls(spotifyURI) {
    const {token} = this.state;

    return new Promise(function (resolve, reject) {
      fetch(`https://api.spotify.com/v1/albums/${spotifyURI}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }).then(result => {
        if (result.status === 200) {
          result.json().then(data => {
            resolve(data.images);
          })
        } else {
          reject([]);
        }
      })
    });
  }

  createEventHandlers() {
    this.player.on('initialization_error', e => this.onInitializationError(e));
    this.player.on('authentication_error', e => this.onAccountError(e));
    this.player.on('account_error', e => this.onAccountError(e));
    this.player.on('playback_error', e => this.onPlaybackError(e));
    this.player.on('player_state_changed', state => this.onPlayerStateChanged(state));
    this.player.on('ready', async data => {
      const {device_id} = data;
      await this.setState({deviceId: device_id, ready: true});
      this.transferPlaybackHere();
    });
  }

  onInitializationError(e) {
    console.warn("onInitializationError");
    console.error(e);
  }

  onAuthenticationError(e) {
    console.warn("onAuthenticationError");
    console.error(e);
  }

  onAccountError(e) {
    console.warn("onAccountError");
    console.error(e);
  }

  onPlaybackError(e) {
    console.warn("onPlaybackError");
    console.error(e);
  }

  onPlayerStateChanged(state) {
    const track = state.track_window.current_track;

    const currentlyPlaying = {
      name: track.name,
      artist: track.artists[0].name,
      albumName: track.album.name,
      albumArt: track.album.images[0].url,
      paused: state.paused,
    };

    this.setState({
      currentlyPlaying,
    })
  }

  componentDidMount() {
    this.playerCheckInterval = setInterval(() => this.checkForPlayer(), 1000);
  }

  render() {

    const {name, artist, albumName, albumArt, paused} = this.state.currentlyPlaying;
    return (
      <>
        {this.state.ready && (
          <MusicPage
            track={name}
            artist={artist}
            album={albumName}
            paused={paused}
            albumArt={albumArt}
            spotifyAPI={this.player}/>
        )}
      </>
    );
  }
}

export default Player;
