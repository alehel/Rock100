import React from 'react';
import noMusic from '../../assets/icons/no_music_album_art.svg';
import {container, albumArt} from './AlbumArt.module.scss';
import PropTypes from "prop-types";

function AlbumArt({src, title}) {
    const comp = src === undefined ? <NoAlbum/> : <ActiveAlbum src={src} title={title}/>

    return <div className={container}>{comp}</div>;
}


function ActiveAlbum({src, title}) {
    return (
        <img src={src} alt={"cover for: " + title} className={albumArt}/>
    );
}

function NoAlbum() {
    return (
        <img src={noMusic} alt="no music playing" className={albumArt}/>
    );
}

AlbumArt.propTypes = {
    src: PropTypes.string,
    title: PropTypes.string
};

AlbumArt.defaultProps = {
    src: undefined,
    title: ""
}

export default AlbumArt;