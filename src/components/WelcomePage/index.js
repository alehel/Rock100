import React from "react";
import albumCompilationImage from '../../assets/album_compilation.png';
import backgroundImage from "../../assets/welcome.jpg";
import SpotifyLoginLink from '../ServiceLoginLink/SpotifyLoginLink';
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
                    <SpotifyLoginLink/>

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
        paddingBottom: '2rem',

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
};

export default Radium(WelcomePage);