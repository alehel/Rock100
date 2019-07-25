import React from 'react';
import previousIcon from './assets/previous.svg';
import playIcon from './assets/play.svg';
import pausedIcon from './assets/pause.svg'
import nextIcon from './assets/next.svg';
import ControlButton from "../ControlButton/ControlButton";

const MusicControls = ({spotifyAPI, size, paused}) => {
    const buttonSizePrimary = parseInt(size) + "px";
    const buttonSizeSecondary = parseInt(size) - 20 + "px";

    return (
        <>
            <ControlButton
                onClick={() => spotifyAPI.previousTrack()}
                description="previous track"
                icon={previousIcon}
                key="cmdPrev"
                size={buttonSizeSecondary}/>
            <ControlButton
                onClick={() => spotifyAPI.togglePlay()}
                description="play/pause track"
                icon={paused ? playIcon : pausedIcon}
                key="cmdPlay"
                size={buttonSizePrimary}/>
            <ControlButton
                onClick={() => spotifyAPI.nextTrack()}
                description="next track"
                icon={nextIcon}
                key="cmdNext"
                size={buttonSizeSecondary}/>
        </>
    );
};

export default MusicControls;
