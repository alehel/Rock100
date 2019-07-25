import React from 'react';
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import MusicBrowser from "../MusicBrowser/MusicBrowser";
import {container} from './MusicPage.module.scss';
import propTypes from 'prop-types';

function MusicPage(props) {
  return (
    <div className={container}>
      <MusicBrowser musicService={props.musicService}/>
      <MusicPlayer {...props}/>
    </div>
  );
}

MusicPage.propTypes = {
  track: propTypes.string.isRequired,
  artist: propTypes.string.isRequired,
  album: propTypes.string.isRequired,
  paused: propTypes.bool.isRequired,
  albumArt: propTypes.string.isRequired,
  musicService: propTypes.object.isRequired,
}

export default MusicPage;