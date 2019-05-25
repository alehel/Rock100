import React, {Component} from 'react';
import {authEndpoint, redirectUri, scopes} from '../../global_constants/spotify';
import {clientId} from '../../global_constants/secrets';
import logo from '../../assets/logo.svg';
import Player from "../Player";

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
                {!token && (
                    <>
                        <img src={logo} className="App-logo" alt="logo"/>
                        <a
                            style={styles.link}
                            className="btn btn--loginApp-link"
                            href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
                        >
                            Login to Spotify
                        </a>
                    </>
                )}
                {token && (
                    <Player
                        token={token}
                    />
                )}

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
    },

    link: {
        margin: '20px',
        color: 'white'
    }
};

export default LandingPage;