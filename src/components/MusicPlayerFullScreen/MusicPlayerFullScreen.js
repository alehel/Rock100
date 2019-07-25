import React from 'react';
import closeIcon from './assets/close.svg';
import AlbumArt from "../AlbumArt/AlbumArt";
import MusicControls from "../MusicControls/MusicControls";
import PropTypes from "prop-types";
import {container, text, trackName, artistName, closeIconStyle, controls} from './MusicPlayerFullScreen.module.scss';

const MusicPlayerFullScreen = ({artist, albumArt, track, closeFullScreen, paused, spotifyAPI}) => {

    return (
        <div className={container}>
            <img src={closeIcon} onClick={closeFullScreen} alt="Close full screen" className={closeIconStyle}/>
            <AlbumArt src={albumArt}/>

            <div className={text}>
                <div className={trackName}>{track}</div>
                <div className={artistName}>{artist}</div>
            </div>
            <div className={controls}>
                <MusicControls size={80} paused={paused} spotifyAPI={spotifyAPI}/>
            </div>
        </div>
    );
};


MusicPlayerFullScreen.propTypes = {
    artist: PropTypes.string.isRequired,
    track: PropTypes.string.isRequired,
    display: PropTypes.bool.isRequired,
    closeFullScreen: PropTypes.func.isRequired
};

export default MusicPlayerFullScreen;