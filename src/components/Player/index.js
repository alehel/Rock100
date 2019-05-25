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
        return (
            <div>
                {this.state.ready && (
                    <>
                        <div className="now-playing__img">
                            <img src={this.state.item.album.images[0].url}/>
                        </div>

                        <div className="now-playing__side">
                            <div className="now-playing__name">{this.state.item.name}</div>
                            <div className="now-playing__artist">
                                {this.state.item.artists[0].name}
                            </div>
                            <div className="now-playing__status">
                                {this.state.is_playing ? "Playing" : "Paused"}
                            </div>
                            <div className="progress">
                                <div
                                    className="progress__bar"
                                />
                            </div>
                        </div>
                    </>
                )}
            </div>
        );
    }
}

export default Player;
