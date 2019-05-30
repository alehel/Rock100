import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import WelcomePage from './components/WelcomePage/';
import Spotify from './components/MusicServiceHandler/Spotify/SpotifyTokenHandler'
import Error404Page from './components/Error404Page';

const AppRoutes = () => (
    <Router>
        <Switch>
            <Route path="/" component={WelcomePage} exact />
            <Route path="/spotify" component={Spotify} exact />
            <Route component={Error404Page} />
        </Switch>
    </Router>
);

export default AppRoutes;