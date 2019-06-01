import React from 'react';
import expandIcon from '../assets/expand.svg';
import AlbumArt from './../../AlbumArt'
import PropTypes from 'prop-types';
import Radium from "radium";
import ControlButton from "./ControlButton";
import Controls from "./Controls";

const Bar = ({artist, album, albumArt, track, openFullScreen, spotifyAPI}) => {
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

        songDetails: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '1.2rem  1rem',
        },
    };

    return (
        <div style={styles.container}>
            <AlbumArt src={albumArt} style={styles.albumArt}/>
            <div style={styles.songDetails}>
                <div>{artist}</div>
                <div>{album}</div>
                <div>{track}</div>
            </div>
            <div style={styles.fill}/>
            <Controls
                spotifyAPI={spotifyAPI}
                size={50}/>
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
