import React, {Component} from 'react';
import Player from "../Player";
import WelcomePage from "../WelcomePage";

class LandingPage extends Component {
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
        const hash = window.location.hash
            .substring(1)
            .split("&")
            .reduce(function (initial, item) {
                if (item) {
                    var parts = item.split("=");
                    initial[parts[0]] = decodeURIComponent(parts[1]);
                }
                return initial;
            }, {}).access_token;

        window.location.hash = "";
        return hash;
    }

    render() {
        const token = this.state.token;

        return !token ? <WelcomePage/> : <Player token={token}/>
    }
}

export default LandingPage;