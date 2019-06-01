import React from 'react';
import previousIcon from '../assets/previous.svg';
import playIcon from '../assets/play.svg';
import nextIcon from '../assets/next.svg';
import Radium from "radium";
import ControlButton from "./ControlButton";

const Controls = ({spotifyAPI, size}) => {
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
                icon={playIcon}
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

export default Radium(Controls);
