import React, {useState} from 'react';
import MusicBar from "./view/Bar";
import FullScreen from './view/FullScreen';
import PropTypes from "prop-types";

const MusicPlayer = (props) => {
    const [fullScreen, setFullScreen] = useState(false);

    return (
        <>
            <FullScreen {...props} display={fullScreen} closeFullScreen={() => setFullScreen(false)} />
            <MusicBar {...props} display={!fullScreen} openFullScreen={() => setFullScreen(true)}/>
        </>
    );
};

MusicPlayer.propTypes = {
    artist: PropTypes.string.isRequired,
    album: PropTypes.string.isRequired,
    albumArt: PropTypes.string,
    track: PropTypes.string.isRequired,
};

export default MusicPlayer;
