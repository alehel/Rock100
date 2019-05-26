import React from 'react';
import PropTypes from 'prop-types';

const MusicBar = ({artist, album, albumArtUrl, track, duration, position}) => {
    return (
        <div style={styles.container}>
            <div style={styles.albumArtContainer}>
                <img src={albumArtUrl} alt="" style={styles.albumArt}/>
            </div>
            <div style={styles.songDetails}>
                <div>Artist: {artist}</div>
                <div>Album:  {album}</div>
                <div>Title:  {track}</div>
            </div>
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

    albumArtContainer: {
        height: '100%',
        overflow: 'hidden',
    },

    albumArt: {
        height: '100%',
    }
};

MusicBar.propTypes = {
    artist: PropTypes.string.isRequired,
    album: PropTypes.string.isRequired,
    albumArtUrl: PropTypes.string.isRequired,
    track: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    position: PropTypes.number.isRequired,
};

export default MusicBar;
