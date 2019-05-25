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
                    <div style={{...styles.box, ...styles.albumBox}}>
                        <img src={albumCompilationImage} alt="" style={styles.albumCompilation}/>
                    </div>
                    <div style={{...styles.box, ...styles.textBox}}>
                        <p>This website is based off of Classic Rock magazines list of top 100 rock albums of all time.
                            Using your Spotify Premium account you can listen to and read about all of these legendary
                            albums.*</p>
                        <p>A Spotify Premium account is required to use this site.</p>
                        <a
                            style={styles.spotifyLink}
                            className="btn btn--loginApp-link"
                            href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
                        >
                            Login using Spotify
                        </a>
                    </div>
                </div>

            </div>
            <Footer/>
        </>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        backgroundImage: 'url("' + backgroundImage + '")',
        backgroundSize: 'cover',
        backgroundPosition: 'center, center',
        boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,.75)',
        fontSize: '1.3rem',
        lineHeight: '1.4'
    },

    title: {
        textAlign: 'center',
        fontSize: '3em',
        color: 'white',
        marginBottom: 0,
    },

    content: {
        flex: 1,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    box: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    },

    albumBox: {
        marginLeft: '20px',
        flex: 1,
    },

    textBox: {
        marginRight: '40px',
        flex: 1,
    },

    spotifyLink: {
        marginTop: '30px',
        textDecoration: 'none',
        backgroundColor: '#1DB954',
        borderRadius: '15px',
        padding: '15px 30px',
        color: 'white',
        fontSize: '1.4rem',
    }
};

export default Radium(WelcomePage);