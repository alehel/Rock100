import React from "react";
import Body from './view/Body';
import Footer from "./view/Footer";


function WelcomePage() {
    return (
        <div style={styles.container}>
            <Body />
            <Footer />
        </div>
    );
}

const styles = {
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    },
}

export default WelcomePage;