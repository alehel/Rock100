import React from 'react';
import noMusic from './assets/no-music.svg';
import PropTypes from "prop-types";

function AlbumArt({src, style}) {
    const comp = src === undefined ? <NoAlbum/> : <ActiveAlbum src={src} />

    return <div style={{overflow: 'hidden', ...style}}>{comp}</div>;
}


function ActiveAlbum({src}) {
    return (
        <img src={src} alt="" style={styles.constraint}/>
    );
}

function NoAlbum() {
    return (
        <img src={noMusic} alt="no music playing" style={styles.constraint}/>
    );
}

const styles = {
    constraint: {
        objectFit: 'contain',
        width: '100%',
        height: '100%'
    }
}


AlbumArt.propTypes = {
    src: PropTypes.string
};

export default AlbumArt;