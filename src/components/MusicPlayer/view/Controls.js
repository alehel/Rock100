import React from 'react';
import previousIcon from '../assets/previous.svg';
import playIcon from '../assets/play.svg';
import nextIcon from '../assets/next.svg';

const Controls = ({style}) => {
    return (
        <div style={{...style, ...styles.container}}>
            <button style={styles.button}><img style={styles.icon} src={previousIcon} alt="previous track"/></button>
            <button style={styles.button}><img style={styles.icon} src={playIcon} alt="play track"/></button>
            <button style={styles.button}><img style={styles.icon} src={nextIcon} alt="next track"/></button>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        backgroundColor: 'transparent',
        border: 'none',
        height: '50%',
    },

    icon: {
        height: '100%',
    }
};

export default Controls;
