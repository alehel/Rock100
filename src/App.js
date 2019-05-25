import React from 'react';
import LandingPage from "./components/LandingPage";
import { THEME_PRIMARY_COLOR } from "./global_constants/style";
import { StyleRoot } from 'radium';

function App() {
    return (
        <StyleRoot>
            <div style={style}>
                <LandingPage />
            </div>
        </StyleRoot>

    );
}

const style = {
    backgroundColor: THEME_PRIMARY_COLOR,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
}

export default App;
