import React from 'react';
import LandingPage from "./components/LandingPage";
import { THEME_PRIMARY_COLOR } from "./global_constants/style";
import NavigationHeader from "./components/NavigationHeader";

function App() {
    return (
        <div style={style}>
            <NavigationHeader/>
            <LandingPage />
        </div>
    );
}

const style = {
    backgroundColor: THEME_PRIMARY_COLOR,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
}

export default App;
