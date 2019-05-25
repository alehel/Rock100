import React from 'react';
import LandingPage from "./components/LandingPage";
import { THEME_PRIMARY_COLOR } from "./global_constants/style";

function App() {
    return (
        <div style={style}>
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
