import React from 'react';
import noMusic from './assets/no-music.svg';
import PropTypes from "prop-types";

function AlbumArt({src, style}) {
    const comp = src === undefined ? <NoAlbum/> : <ActiveAlbum src={src} />

    return <div style={style}>{comp}</div>;
}


function ActiveAlbum({src}) {
    return (
        <img src={src} alt="" style={constraint}/>
    );
}

function NoAlbum() {
    return (
        <img src={noMusic} alt="no music playing" style={constraint}/>
    );
}

const constraint = {
    maxWidth: '100%',
    maxHeight: '100%',
}


AlbumArt.propTypes = {
    src: PropTypes.string
};

export default AlbumArt;