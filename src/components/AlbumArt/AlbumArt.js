import React from 'react';
import noMusic from '../../assets/icons/no_music_album_art.svg';
import {container, albumArt} from './AlbumArt.module.scss';
import PropTypes from "prop-types";

function AlbumArt({src, style}) {
    const comp = src === undefined ? <NoAlbum/> : <ActiveAlbum src={src} />

    return <div className={container}>{comp}</div>;
}


function ActiveAlbum({src}) {
    return (
        <img src={src} alt="" className={albumArt}/>
    );
}

function NoAlbum() {
    return (
        <img src={noMusic} alt="no music playing" className={albumArt}/>
    );
}

AlbumArt.propTypes = {
    src: PropTypes.string
};

export default AlbumArt;