import React from "react";
import albumCompilationImage from '../../assets/album_compilation.png';
import {authEndpoint, redirectUri, scopes} from "../../global_constants/spotify";
import {clientId} from "../../global_constants/secrets";
import backgroundImage from "../../assets/welcome.jpg";

export default function WelcomePage() {
    return (
        <div style={styles.container}>
            <div style={styles.box}>
                <img src={albumCompilationImage} alt="" style={styles.albumCompilation}/>
            </div>
            <div style={styles.box}>
                <p>This website is based  off of Classic Rock magazines list of top 100 rock albums of all time. It allows you to listen to, and read about, all the albums on the list.</p>
                <p>A Spotify Premium account is required to use this site.</p>
                <a
                    style={styles.link}
                    className="btn btn--loginApp-link"
                    href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
                >
                    Login using Spotify
                </a>
            </div>

        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,

        backgroundImage: 'url("' + backgroundImage + '")',
        backgroundSize: 'cover',
        backgroundPosition: 'center, center',
        boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,.6)',
        fontSize: '1.3rem',
        lineHeight: '1.4'
    },

    albumCompilation: {
        width: '85%',
        marginLeft: '10%',
    },

    box: {
        marginRight: '100px',
        marginLeft: '30px',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    },

    link: {
        marginTop: '30px',
        textDecoration: 'none',
        backgroundColor: '#1DB954',
        borderRadius: '15px',
        padding: '15px 30px',
        color: 'white',
        fontSize: '1.4rem',
    }
};