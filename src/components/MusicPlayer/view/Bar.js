import React from 'react';
import expandIcon from '../assets/expand.svg';
import AlbumArt from './../../AlbumArt'
import PropTypes from 'prop-types';
import Radium from "radium";

const Bar = ({artist, album, albumArt, track, openFullScreen}) => {
    return (
        <div style={styles.container}>
            <AlbumArt src={albumArt} style={styles.albumArt}/>
            <div style={styles.songDetails}>
                <div>{artist}</div>
                <div>{album}</div>
                <div>{track}</div>
            </div>
            <div style={styles.control}>

            </div>
            <img onClick={openFullScreen} src={expandIcon} alt="Open full screen" style={styles.expandIcon}/>
        </div>
    );
};

const styles = {
    container: {
        height: '120px',
        display: 'flex',
        backgroundColor: 'black',
        color: 'white',
    },

    albumArt: {
        width: '120px',
        height: '100%',
    },

    songDetails: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '1.2rem  1rem',
    },

    control: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        flex: 1,
    },

    expandIcon: {
        margin: 'auto 2rem',
        height: '50%',
        ':hover': {
            cursor: 'pointer',
        }
    }
};

Bar.propTypes = {
    artist: PropTypes.string.isRequired,
    album: PropTypes.string.isRequired,
    albumArt: PropTypes.string,
    track: PropTypes.string.isRequired,
};

export default Radium(Bar);
