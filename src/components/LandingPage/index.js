import React, {Component} from 'react';
import Player from "../Player";
import {SpotifyLogin} from "./SpotifyLogin";

// Get the hash of the url
const hash = window.location.hash
    .substring(1)
    .split("&")
    .reduce(function (initial, item) {
        if (item) {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
    }, {});

window.location.hash = "";

class LandingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            token: null,
        }
    }

    componentDidMount() {
        const _token = hash.access_token;
        if (_token) {
            this.setState({
                token: _token
            });
        }
    }

    render() {
        const token = this.state.token;

        return (
            <div style={styles.container}>
                {!token ? <SpotifyLogin/> : <Player token={token} />}
            </div>)
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }
};

export default LandingPage;