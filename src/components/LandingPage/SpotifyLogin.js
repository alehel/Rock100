import React from "react";
import logo from "../../assets/logo.svg";
import {authEndpoint, redirectUri, scopes} from "../../global_constants/spotify";
import {clientId} from "../../global_constants/secrets";

export function SpotifyLogin() {
    return <>
        <img src={logo} className="App-logo" alt="logo"/>
        <a
            style={styles.link}
            className="btn btn--loginApp-link"
            href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
        >
            Login to Spotify
        </a>
    </>;
}

const styles = {
    link: {
        margin: '20px',
        color: 'white'
    }
}