import React from 'react';
import PropTypes from 'prop-types';
import {THEME_PRIMARY_COLOR} from "../../../global_constants/style";
import closeIcon from '../assets/close.svg';
import Radium from "radium";

const FullScreen = ({artist, album, albumArtUrl, track, duration, position, display, closeFullScreen}) => {
    const styles = {
        container: {
            position: 'fixed',
            bottom: 0,
            right: 0,
            zIndex: 2,
            width: '100%',
            height: !display ? '0%' : '100%',
            backgroundColor: THEME_PRIMARY_COLOR,

            transitionProperty: 'all',
            transitionDuration: '0.4s',
            transitionTimingFunction: 'linear'
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
            <img src={closeIcon} onClick={closeFullScreen} alt="Close full screen" style={styles.closeIcon} />
        </div>
    );
};


FullScreen.propTypes = {
    artist: PropTypes.string.isRequired,
    album: PropTypes.string.isRequired,
    albumArtUrl: PropTypes.string.isRequired,
    track: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    position: PropTypes.number.isRequired,
    closeFullScreen: PropTypes.func.isRequired
};

export default Radium(FullScreen);
