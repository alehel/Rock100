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
            ready: false,

            item: {
                album: {
                    images: [{url: ""}]
                },
                name: "",
                artists: [{name: ""}],
                duration_ms: 0,
            },
            is_playing: "Paused",
            progress_ms: 0
        };

        this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
    }

    componentDidMount() {
        this.getCurrentlyPlaying();
    }

    getCurrentlyPlaying() {
        const self = this;

        fetch('https://api.spotify.com/v1/me/player', {
            headers: new Headers({
                'Authorization': 'Bearer ' + this.props.token,
            }),
        }).then(response => {
            if (response.ok) {
                response.json().then(json => {
                    const playing = json.item;

                    self.setState({
                        currentlyPlaying: {
                            name: playing.name,
                            artist: playing.artists[0].name,
                            albumName: playing.album.name,
                            albumArt: playing.album.images[0].url,
                        },
                        ready: true,
                    })
                })
            }
        })
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
