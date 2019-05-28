import React from 'react';
import noMusic from './../../assets/no-music.svg';
import PropTypes from "prop-types";

function AlbumArt({src}) {
    if(src === undefined) {
        return <NoAlbum />
    } else {
        return <ActiveAlbum src={src} />
    }
}


function ActiveAlbum({src}) {
    return (
        <div style={styles.albumArtContainer}>
            <img src={src} alt="" style={styles.albumArt}/>
        </div>
    );
}

function NoAlbum() {
    return (
        <div style={styles.noAlbum}>
            <img src={noMusic} alt="no music playing" style={styles.noAlbumIcon}/>
        </div>
    );
}

const styles = {
    albumArtContainer: {
        height: '100%',
        width: '120px',
        overflow: 'hidden',
    },

    albumArt: {
        height: '100%',
    },

    noAlbum: {
        backgroundColor: 'grey',
        width: '120px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    noAlbumIcon: {
        minHeight: '50%',
    },
};

AlbumArt.propTypes = {
    src: PropTypes.string
};

export default AlbumArt;