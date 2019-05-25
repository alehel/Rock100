import React from 'react';
import LandingPage from "./components/LandingPage";
import { THEME_PRIMARY_COLOR } from "./global_constants/style";
import HeaderBar from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App" style={style}>
            <HeaderBar/>
            <LandingPage />
            <Footer/>
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
