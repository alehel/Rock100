import React from "react";
import albumCompilationImage from '../../assets/album_compilation.png';
import {authEndpoint, redirectUri, scopes} from "../../global_constants/spotify";
import {clientId} from "../../global_constants/secrets";
import backgroundImage from "../../assets/welcome.jpg";
import Footer from "./Footer";
import Radium from "radium";

function WelcomePage() {
    return (
        <>
            <div style={styles.container}>
                <h1 style={styles.title}>Top 100 Rock Albums of All Time</h1>
                <div style={styles.content}>
                    <img src={albumCompilationImage} alt="" style={styles.albumArt}/>
                    <div style={styles.text}>
                        <p>This website is based off of Classic Rock magazines list of top 100 rock
                            albums of all time.
                            Using your Spotify Premium account you can listen to and read about all of these legendary
                            albums.*</p>
                        <p>A Spotify Premium account is required to use this site.</p>
                        <p style={styles.linkContainer}>
                            <a style={styles.link}
                               href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}>
                                Login using Spotify
                            </a>
                        </p>

                    </div>
                </div>

            </div>
            <Footer/>
        </>
    );
}

const styles = {
    container: {
        flex: 1,

        // Background image
        backgroundImage: 'url("' + backgroundImage + '")',
        backgroundSize: 'cover',
        backgroundPosition: 'center, center',
        boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,.75)',

        '@media only screen and (min-width: 1400px)': {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
        }
    },

    title: {
        color: 'white',
        textAlign: 'center',
        '@media only screen and (min-width: 1400px)': {
            fontSize: '3rem',
            marginBottom: 0,
        }
    },

    content: {
        '@media only screen and (min-width: 1400px)': {
            flex: 1,
            display: 'flex',
            margin: '0 5rem',
            alignItems: 'center',
        }
    },

    text: {
        color: 'white',
        textAlign: 'center',
        lineHeight: '1.6rem',
        fontSize: '1.2rem',
        margin: '1.2rem'
    },

    albumArt: {
        maxWidth: '100%',
        margin: '30px auto',
        display: 'block',
    },

    linkContainer: {
        marginTop: '50px',
    },

    link: {
        borderRadius: '15px',
        padding: '10px 25px',
        backgroundColor: '#1DB954',
        textDecoration: 'none',
        color: 'white',
    }
};

export default Radium(WelcomePage);