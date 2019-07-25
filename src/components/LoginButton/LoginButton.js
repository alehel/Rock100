import React from 'react';
import {container, link} from './LoginButton.module.scss';

import {clientId} from "../../secrets";
export const authEndpoint = 'https://accounts.spotify.com/authorize';
export const redirectUri = "http://localhost:3000/callback";
export const scopes = ["streaming", "user-read-birthdate", "user-read-email", "user-read-private", "user-modify-playback-state"];

function LoginButton() {
    return (
        <div className={container}>
            <a className={link}
               href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}>
                Login using Spotify
            </a>
        </div>
    );
}

export default LoginButton;