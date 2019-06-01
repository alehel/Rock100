import React from 'react';
import previousIcon from '../assets/previous.svg';
import playIcon from '../assets/play.svg';
import nextIcon from '../assets/next.svg';

const Controls = ({style, spotifyAPI}) => {
    return (
        <div style={styles.container}>
            <button style={styles.button} onClick={spotifyAPI.previousTrack}>
                <img style={styles.icon} src={previousIcon} alt="previous track"/>
            </button>

            <button style={styles.button} onClick={spotifyAPI.togglePlay}>
                <img style={styles.icon} src={playIcon} alt="play track"/>
            </button>

            <button style={styles.button} onClick={spotifyAPI.nextTrack}>
                <img style={styles.icon} src={nextIcon} alt="next track"/>
            </button>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '300px',
        height: '100%',
        maxHeight: '100%',
    },

    button: {
        backgroundColor: 'transparent',
        border: 'none',
        height: '50%',
        maxHeight: '50%',
    },

    icon: {
        height: '100%',
        maxHeight: '100%',
    }
};

export default Controls;
