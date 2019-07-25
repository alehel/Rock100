import React from 'react';
import expandIcon from './assets/expand.svg';
import PropTypes from 'prop-types';
import {container, fill, songDetails} from './MusicPlayerBar.module.scss';
import AlbumArt from "../AlbumArt/AlbumArt";
import ControlButton from "../ControlButton/ControlButton";
import MusicControls from "../MusicControls/MusicControls";

const MusicPlayerBar = ({artist, album, albumArt, track, openFullScreen, paused, spotifyAPI}) => {
    const buttonSizePrimary = 50;

    return (
        <div className={container}>
            <AlbumArt src={albumArt}/>
            <div className={songDetails}>
                <div>{artist}</div>
                <div>{album}</div>
                <div>{track}</div>
            </div>
            <div className={fill}/>
            <MusicControls
                spotifyAPI={spotifyAPI}
                paused={paused}
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

MusicPlayerBar.propTypes = {
    artist: PropTypes.string.isRequired,
    album: PropTypes.string.isRequired,
    albumArt: PropTypes.string,
    track: PropTypes.string.isRequired,
};

export default MusicPlayerBar;
