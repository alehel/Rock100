import React from 'react';
import PropTypes from 'prop-types';
import {THEME_PRIMARY_COLOR, THEME_PRIMARY_COLOR_TRANSPARENT} from "../../../global_constants/style";
import closeIcon from '../assets/close.svg';
import Radium from "radium";

const FullScreen = ({artist, album, albumArt, track, display, closeFullScreen}) => {
    const styles = {
        container: {
            position: 'fixed',
            bottom: 0,
            right: 0,
            zIndex: 2,
            width: '100%',
            height: !display ? '0%' : '100%',
            backgroundColor: THEME_PRIMARY_COLOR_TRANSPARENT,

            transitionProperty: 'all',
            transitionDuration: '0.4s',
            transitionTimingFunction: 'linear',

            color: 'white',
        },

        albumArtContainer: {
            marginTop: '5rem'
        },

        albumArt: {
            margin: 'auto',
            display: 'block',
            maxWidth: '70%',
        },

        text: {
            textAlign: 'center',
            marginTop: '1rem',
            lineHeight: '2.5rem',
        },

        trackName: {
            fontWeight: '900',
            fontSize: '1.8rem',
        },

        artistName: {
            fontSize: '1.6rem',
        },

        closeIcon: {
            height: '50px',
            position: 'absolute',
            top: 0,
            right: 0,
            marginRight: '1rem',
            marginTop: '1rem',
            ':hover': {
                cursor: 'pointer',
            }
        }
    };

    return (
        <div style={styles.container}>
            <img src={closeIcon} onClick={closeFullScreen} alt="Close full screen" style={styles.closeIcon}/>
            <div style={styles.albumArtContainer}>
                <img src={albumArt} alt="album art" style={styles.albumArt}/>
            </div>

            <div style={styles.text}>
                <div style={styles.trackName}>{track}</div>
                <div style={styles.artistName}>{artist}</div>
            </div>
        </div>
    );
};


FullScreen.propTypes = {
    artist: PropTypes.string.isRequired,
    album: PropTypes.string.isRequired,
    albumArt: PropTypes.string.isRequired,
    track: PropTypes.string.isRequired,
    display: PropTypes.bool.isRequired,
    closeFullscreen: PropTypes.func.isRequired
};

export default Radium(FullScreen);
