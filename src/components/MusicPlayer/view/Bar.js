import React, {Component} from 'react';
import expandIcon from '../assets/expand.svg';
import AlbumArt from './../../AlbumArt'
import PropTypes from 'prop-types';
import Radium from "radium";

const Bar = ({artist, album, albumArtUrl, track, duration, position, openFullScreen}) => {
    return (
        <div style={styles.container}>
            <AlbumArt src={albumArtUrl}/>
            <div style={styles.songDetails}>
                <div>Artist: {artist}</div>
                <div>Album: {album}</div>
                <div>Title: {track}</div>
            </div>
            <div style={styles.control}></div>
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

    songDetails: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '1.2rem  1rem',
    },

    control: {
        flex: 1,
    },

    expandIcon: {
        margin: 'auto',
        height: '50%',
        marginRight: '2rem',
        ':hover': {
            cursor: 'pointer',
        }
    }
};

Bar.propTypes = {
    artist: PropTypes.string.isRequired,
    album: PropTypes.string.isRequired,
    albumArtUrl: PropTypes.string.isRequired,
    track: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    position: PropTypes.number.isRequired,
};

export default Radium(Bar);
