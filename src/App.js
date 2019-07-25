import React, {Component} from 'react';
import WelcomePage from './components/WelcomePage/WelcomePage';
import SpotifyServiceWrapper from './components/SpotifyMusicService';
import LoginError from './components/LoginError';
import {container} from './App.module.scss';

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
      <div className={container}>
        {this.loginError() ? <LoginError/> :
          !token ? <WelcomePage/> : <SpotifyServiceWrapper token={token}/>
        }
      </div>
    );
  }
}

export default App;
