import React from 'react';
import closeIcon from '../../assets/icons/close.svg';
import AlbumArt from "../AlbumArt/AlbumArt";
import MusicControls from "../MusicControls/MusicControls";
import PropTypes from "prop-types";
import {artistName, closeIconStyle, container, controls, text, trackName} from './MusicPlayerFullScreen.module.scss';

const MusicPlayerFullScreen = ({artist, albumArt, album, track, closeFullScreen, paused, musicService}) => {

  return (
    <div className={container}>
      <img src={closeIcon} onClick={closeFullScreen} alt="Close full screen" className={closeIconStyle}/>
      <AlbumArt src={albumArt} title={album}/>

      <div className={text}>
        <div className={trackName}>{track}</div>
        <div className={artistName}>{artist}</div>
      </div>
      <div className={controls}>
        <MusicControls size={80} paused={paused} musicService={musicService}/>
      </div>
    </div>
  );
};


MusicPlayerFullScreen.propTypes = {
  artist: PropTypes.string.isRequired,
  albumArt: PropTypes.string,
  track: PropTypes.string.isRequired,
  closeFullScreen: PropTypes.func.isRequired,
  paused: PropTypes.bool.isRequired
};

MusicPlayerFullScreen.defaultProps = {
  albumArt: undefined
};

export default MusicPlayerFullScreen;