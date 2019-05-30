import React, {Component} from 'react';
import SpotifyTokenHandler from "./MusicServiceHandler/Spotify/SpotifyTokenHandler";
import Error404Page from "./Error404Page";

class CallbackHandler extends Component {
    determineServiceProvider() {
        const href = window.location.href;

        if(href.includes("spotify")) {
            return "spotify";
        } else {
            return undefined;
        }
    }

    render() {
        const provider = this.determineServiceProvider();

        switch (provider) {
            case "spotify":
                return <SpotifyTokenHandler />;
                break;
            default:
                return <Error404Page />;
                break;
        }
    }
}

export default CallbackHandler;