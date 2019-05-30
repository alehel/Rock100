import React, {Component} from 'react';
import MusicPage from "./MusicPage";

class Player extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentlyPlaying: {
                name: "",
                artist: "",
                albumName: "",
                albumArt: undefined
            },
            paused: true,
            deviceId: "",
            ready: false,
        };

        this.playerCheckInterval = null;
    }

    checkForPlayer() {

        if (window.Spotify !== null) {
            clearInterval(this.playerCheckInterval);
            this.player = new window.Spotify.Player({
                name: "Rock 100",
                getOAuthToken: cb => { cb(this.props.token); },
            });

            this.createEventHandlers();

            this.player.connect();
        }
    }

    createEventHandlers() {
        this.player.on('initialization_error', e => this.onInitializationError(e));
        this.player.on('authentication_error', e => this.onAccountError(e));
        this.player.on('account_error', e => this.onAccountError(e));
        this.player.on('playback_error', e => this.onPlaybackError(e));
        this.player.on('player_state_changed', state => this.onPlayerStateChanged(state));
        this.player.on('ready', data => this.onReady(data));
    }

    onInitializationError(e) {
        console.error(e);
    }

    onAuthenticationError(e) {
        // not logged inn
        console.error(e);
    }

    onAccountError(e) {
        console.error(e);
    }

    onPlaybackError(e) {
        console.error(e);
    }

    onPlayerStateChanged(state) {
        console.log(state);
        const track = state.track_window.current_track;

        this.setState({
            paused: state.paused,
            currentlyPlaying: {
                name: track.name,
                artist: track.artists[0].name,
                albumName: track.album.name,
                albumArt: track.album.images[0].url,
            }

        })
    }

    onReady(data) {
        console.log("Let the music play!");
        const { device_id } = data;
        this.setState({
            deviceId: device_id,
            ready: true,
        });
    }

    componentDidMount() {
        this.playerCheckInterval = setInterval(() => this.checkForPlayer(), 1000);
    }

    render() {
        const { name, artist, albumName, albumArt } = this.state.currentlyPlaying;

        return (
            <>
                {this.state.ready && (
                    <MusicPage
                        track={name}
                        artist={artist}
                        album={albumName}
                        albumArt={albumArt}/>

                )}
            </>
        );
    }
}

export default Player;
