import React, {useState} from 'react';
import MusicBar from "./view/Bar";
import FullScreen from './view/FullScreen';

const MusicPlayer = (props) => {
    const [fullScreen, setFullScreen] = useState(false);

    return (
        <>
            <FullScreen {...props} display={fullScreen} closeFullScreen={() => setFullScreen(false)} />
            <MusicBar {...props} openFullScreen={() => setFullScreen(true)}/>
        </>
    );
};

export default MusicPlayer;
