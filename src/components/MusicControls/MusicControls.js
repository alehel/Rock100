import React from 'react';
import previousIcon from './assets/previous.svg';
import playIcon from './assets/play.svg';
import pausedIcon from './assets/pause.svg'
import nextIcon from './assets/next.svg';
import {button, icon} from './MusicControls.module.scss';

const MusicControls = ({spotifyAPI, paused}) => {
    return (
        <div>
            <button className={button} onClick={() => spotifyAPI.previousTrack()} key="cmdPrev">
                <img className={icon} src={previousIcon} alt={"previous track"}/>
            </button>
            <button className={button} onClick={() => spotifyAPI.togglePlay()} key="cmdPlay">
                <img className={icon} src={paused ? playIcon : pausedIcon} alt={"play/pause track"}/>
            </button>
            <button className={button} onClick={() => spotifyAPI.nextTrack()} key="cmdNext">
                <img className={icon} src={nextIcon} alt={"next track"}/>
            </button>
        </div>
    )
};

export default MusicControls;