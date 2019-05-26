import React, {Component} from 'react';
import MusicPage from "../../MusicPage";

class Player extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
                    console.log(json);
                    self.setState({
                        item: json.item,
                        is_playing: json.is_playing,
                        progress_ms: json.progress_ms,
                        ready: true,
                    })
                })
            }
        })
    }

    render() {
        const progressBarWidth = {
            width: (this.state.progress_ms * 100 / this.state.item.duration_ms) + '%'
        };

        const item = this.state.item;

        return (
            <>
                {this.state.ready && (
                    <MusicPage
                        track={item.name}
                        duration={item.duration_ms}
                        position={item.position}
                        artist={item.artists[0].name}
                        album={item.album.name}
                        albumArtUrl={item.album.images[0].url}/>

                )}
            </>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
    },
    progress: {
        border: '1px solid #eee',
        height: '6px',
        borderRadius: '3px',
        overflow: 'hidden',
    },

    progressBar: {
        backgroundColor: '#eee',
        height: '4px',
    }
};

export default Player;
