import React from 'react';
import expandIcon from '../assets/expand.svg';
import AlbumArt from './../../AlbumArt'
import PropTypes from 'prop-types';
import Radium from "radium";
import Controls from "./Controls";

const Bar = ({artist, album, albumArt, track, openFullScreen, display}) => {
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

        controls: {
            flex: 1,
        },

        songDetails: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '1.2rem  1rem',
        },


        expandIcon: {
            margin: 'auto 2rem',
            height: '50%',
            ':hover': {
                cursor: 'pointer',
            }
        }
    };

    return (
        <div style={styles.container}>
            <AlbumArt src={albumArt} style={styles.albumArt}/>
            <div style={styles.songDetails}>
                <div>{artist}</div>
                <div>{album}</div>
                <div>{track}</div>
            </div>
            <Controls style={styles.controls}/>
            <img onClick={openFullScreen} src={expandIcon} alt="Open full screen" style={styles.expandIcon}/>
        </div>
    );
};

Bar.propTypes = {
    artist: PropTypes.string.isRequired,
    album: PropTypes.string.isRequired,
    albumArt: PropTypes.string,
    track: PropTypes.string.isRequired,
};

export default Radium(Bar);
