import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import WelcomePage from './components/WelcomePage/';
import Error404Page from './components/Error404Page';
import CallbackHandler from "./components/CallbackHandler";

const AppRoutes = () => (
    <Router>
        <Switch>
            <Route path="/" component={WelcomePage} exact />
            <Route path="/callback" component={CallbackHandler} />
            <Route component={Error404Page} />
        </Switch>
    </Router>
);

export default AppRoutes;