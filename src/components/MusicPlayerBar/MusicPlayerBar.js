import React from 'react';
import expandIcon from '../../assets/icons/expand.svg';
import PropTypes from 'prop-types';
import {container, fill, songDetails} from './MusicPlayerBar.module.scss';
import AlbumArt from "../AlbumArt/AlbumArt";
import ControlButton from "../ControlButton/ControlButton";
import MusicControls from "../MusicControls/MusicControls";

const MusicPlayerBar = ({artist, album, albumArt, track, openFullScreen, paused, musicService}) => {
  const buttonSizePrimary = 50;

  return (
    <div className={container}>
      <AlbumArt src={albumArt} title={album}/>
      <div className={songDetails}>
        <div>{artist}</div>
        <div>{album}</div>
        <div>{track}</div>
      </div>
      <div className={fill}/>
      <MusicControls
        musicService={musicService}
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
  openFullScreen: PropTypes.func.isRequired,
  paused: PropTypes.bool.isRequired,
  musicService: PropTypes.object.isRequired
};

MusicPlayerBar.defaultProps = {
  albumArt: undefined,
}

export default MusicPlayerBar;
