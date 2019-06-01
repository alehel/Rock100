import React from 'react';
import PropTypes from 'prop-types';
import {THEME_PRIMARY_COLOR_TRANSPARENT} from "../../../global_constants/style";
import closeIcon from '../assets/close.svg';
import Radium from "radium";
import AlbumArt from "../../AlbumArt";

const FullScreen = ({artist, albumArt, track, display, closeFullScreen}) => {
    const styles = {
        container: {
            position: 'fixed',
            bottom: 0,
            right: 0,
            zIndex: 2,
            width: '100%',
            height: !display ? '0%' : '100%',
            backgroundColor: THEME_PRIMARY_COLOR_TRANSPARENT,

            color: 'white',

            display: !display ? 'none' : 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        },

        albumArt: {
            width: '60%',
            maxHeight: '60%',
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
            <AlbumArt src={albumArt} style={styles.albumArt}/>

            <div style={styles.text}>
                <div style={styles.trackName}>{track}</div>
                <div style={styles.artistName}>{artist}</div>
            </div>
        </div>
    );
};


FullScreen.propTypes = {
    artist: PropTypes.string.isRequired,
    albumArt: PropTypes.string.isRequired,
    track: PropTypes.string.isRequired,
    display: PropTypes.bool.isRequired,
    closeFullScreen: PropTypes.func.isRequired
};

export default Radium(FullScreen);
