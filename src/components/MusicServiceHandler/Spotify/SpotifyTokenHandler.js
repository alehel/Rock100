import React, {Component} from 'react';
import SpotifyServiceHandler from "./SpotifyServiceHandler";

class SpotifyTokenHandler extends Component {
    constructor(props) {
        super(props);

        this.state = {
            token: null,
        };

        this.getTokenFromHash = this.getTokenFromHash.bind(this);
    }

    componentDidMount() {
        const _token = this.getTokenFromHash();
        if (_token) {
            this.setState({
                token: _token
            });
        }
    }

    getTokenFromHash() {
        const token = window.location.hash
            .substring(1)
            .split("&")
            .reduce(function (initial, item) {
                if (item) {
                    var parts = item.split("=");
                    initial[parts[0]] = decodeURIComponent(parts[1]);
                }
                return initial;
            }, {}).access_token;

        //window.location.hash = "";
        return token;
    }

    render() {
        const token = this.state.token;

        return !token ? null : <SpotifyServiceHandler token={token}/>
    }
}

export default SpotifyTokenHandler;