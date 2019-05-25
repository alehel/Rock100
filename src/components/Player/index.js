import React, {Component} from 'react';

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
                    if (response.status === 200) {
                        self.setState({
                            item: json.item,
                            is_playing: json.is_playing,
                            progress_ms: json.progress_ms,
                            ready: true,
                        })
                    } else {
                        // handle error
                    }
                })
            }
        })
    }

    render() {
        const progressBarWidth = {
            width: (this.state.progress_ms * 100 / this.state.item.duration_ms) + '%'
        };

        return (
            <div>
                {this.state.ready && (
                    <>
                        <div className="now-playing__img">
                            <img alt="Album cover art" src={this.state.item.album.images[0].url}/>
                        </div>

                        <div className="now-playing__side">
                            <div className="now-playing__name">{this.state.item.name}</div>
                            <div className="now-playing__artist">
                                {this.state.item.artists[0].name}
                            </div>
                            <div className="now-playing__status">
                                {this.state.is_playing ? "Playing" : "Paused"}
                            </div>
                            <div style={styles.progress}>
                                <div
                                    style={{...styles.progressBar, ...progressBarWidth}}
                                />
                            </div>
                        </div>
                    </>
                )}
            </div>
        );
    }
}

const styles = {
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
}

export default Player;
