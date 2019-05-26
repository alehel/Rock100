import React from 'react';
import Radium from "radium";

import {clientId} from "../../../global_constants/secrets";
export const authEndpoint = 'https://accounts.spotify.com/authorize';
export const redirectUri = "http://localhost:3000/spotify/";
export const scopes = [
    "user-read-currently-playing",
    "user-read-playback-state",
];

function SpotifyLoginLink() {
    return (
        <div style={styles.linkContainer}>
            <a style={styles.link}
               href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}>
                Login using Spotify
            </a>

        </div>
    );
}

const styles = {
    linkContainer: {
        marginTop: '50px',
    },

    link: {
        borderRadius: '15px',
        padding: '10px 25px',
        backgroundColor: '#1DB954',
        textDecoration: 'none',
        color: 'white',

        ':hover': {
            backgroundColor: '#1ccb50',
        }
    },
};

export default Radium(SpotifyLoginLink);