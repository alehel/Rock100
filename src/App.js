import React, {Component} from 'react';
import {StyleRoot} from 'radium';
import WelcomePage from "./components/WelcomePage";
import SpotifyServiceWrapper from "./components/SpotifyServiceWrapper";
import LoginError from "./components/LoginError";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {token: null};
    }

    componentDidMount() {
        const _token = this.getTokenFromHash();
        if (_token) {
            this.setState({
                token: _token
            });
        }
    }

    loginError() {
        return window.location.href.includes("error=access_denied");
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

        return (
            <StyleRoot>
                <div style={style}>
                    {this.loginError() ? <LoginError/>:
                        !token ? <WelcomePage/> : <SpotifyServiceWrapper token={token}/>
                    }
                </div>
            </StyleRoot>
        );
    }
}

const style = {
    display: 'flex',
    minHeight: '100vh'
};

export default App;
