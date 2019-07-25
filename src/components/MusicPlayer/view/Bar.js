import React from 'react';
import expandIcon from '../../MusicPlayerBar/assets/expand.svg';
import PropTypes from 'prop-types';
import Radium from "radium";
import AlbumArt from "../../AlbumArt/AlbumArt";
import ControlButton from "../../ControlButton/ControlButton";
import MusicControls from "../../MusicControls/MusicControls";

const Bar = ({artist, album, albumArt, track, openFullScreen, paused, spotifyAPI}) => {
    const barSize = '120px';
    const buttonSizePrimary = 50;

    const styles = {
        container: {
            height: barSize,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
            color: 'white',
        },

        albumArt: {
            minWidth: barSize,
            width: barSize,
            minHeight: barSize,
            height: barSize,
        },

        fill: {
            flex: 1,
        },

        mobileFill: {
            '@media only screen and (max-width: 800px)': {
                flex: 1,
            }
        },

        songDetails: {
            '@media only screen and (max-width: 800px)': {
                display: 'none',
            },
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '1.2rem  1rem',
            maxWidth: '320px',
        },

        songDetailsText: {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        }
    };

    return (
        <div style={styles.container}>
            <AlbumArt src={albumArt} style={styles.albumArt}/>
            <div style={styles.songDetails}>
                <div style={styles.songDetailsText}>{artist}</div>
                <div style={styles.songDetailsText}>{album}</div>
                <div style={styles.songDetailsText}>{track}</div>
            </div>
            <div style={styles.fill}/>
            <MusicControls
                spotifyAPI={spotifyAPI}
                paused={paused}
                size={50}/>
            <div style={styles.mobileFill}/>
            <ControlButton
                onClick={openFullScreen}
                icon={expandIcon}
                description="open full screen"
                key="cmdFullScreen"
                size={buttonSizePrimary + "px"}/>
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
