import React from 'react';
import noMusic from './assets/no-music.svg';
import PropTypes from "prop-types";

function AlbumArt({src, style}) {
    const comp = src === undefined ? <NoAlbum/> : <ActiveAlbum src={src} />

    return <div style={{...style, textAlign: 'center'}}>{comp}</div>;
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
    objectFit: 'contain',
    width: '100%',
    height: '100%'
}


AlbumArt.propTypes = {
    src: PropTypes.string
};

export default AlbumArt;