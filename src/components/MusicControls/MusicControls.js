import React from 'react';
import previousIcon from '../../assets/icons/previous_track.svg';
import playIcon from '../../assets/icons/play_track.svg';
import pausedIcon from '../../assets/icons/pause_track.svg'
import nextIcon from '../../assets/icons/next_track.svg';
import ControlButton from "../ControlButton/ControlButton";

const MusicControls = ({musicService, size, paused}) => {
    const buttonSizePrimary = parseInt(size) + "px";
    const buttonSizeSecondary = parseInt(size) - 20 + "px";

    return (
        <>
            <ControlButton
                onClick={() => musicService.previousTrack()}
                description="previous track"
                icon={previousIcon}
                key="cmdPrev"
                size={buttonSizeSecondary}/>
            <ControlButton
                onClick={() => musicService.togglePlay()}
                description="play/pause track"
                icon={paused ? playIcon : pausedIcon}
                key="cmdPlay"
                size={buttonSizePrimary}/>
            <ControlButton
                onClick={() => musicService.nextTrack()}
                description="next track"
                icon={nextIcon}
                key="cmdNext"
                size={buttonSizeSecondary}/>
        </>
    );
};

export default MusicControls;
