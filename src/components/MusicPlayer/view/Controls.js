import React from 'react';
import previousIcon from '../assets/previous.svg';
import playIcon from '../assets/play.svg';
import nextIcon from '../assets/next.svg';
import Radium from "radium";

const Controls = ({style, spotifyAPI}) => {
    return (
        <div style={{...style, ...styles.container}}>
            <button style={styles.button} onClick={() => spotifyAPI.previousTrack()} key="previous">
                <img style={styles.icon} src={previousIcon} alt="previous track"/>
            </button>

            <button style={styles.button} onClick={() => spotifyAPI.togglePlay()} key="play">
                <img style={styles.icon} src={playIcon} alt="play track"/>
            </button>

            <button style={styles.button} onClick={() => spotifyAPI.nextTrack()} key="next">
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
        maxHeight: '100%',
    },

    button: {
        backgroundColor: 'transparent',
        border: 'none',
        height: '50%',
        maxHeight: '50%',
        ':hover': {
            cursor: 'pointer',
        }
    },

    icon: {
        height: '100%',
        maxHeight: '100%',
    }
};

export default Radium(Controls);
