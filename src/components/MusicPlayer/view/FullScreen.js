import React from 'react';
import PropTypes from 'prop-types';
import {THEME_PRIMARY_COLOR} from "../../../global_constants/style";

const FullScreen = ({artist, album, albumArtUrl, track, duration, position, display}) => {
    const styles = {
        container: {
            position: 'fixed',
            display: !display ? 'none' : 'initial',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 2,
            width: '100%',
            height: '100%',
            backgroundColor: THEME_PRIMARY_COLOR,
        }
    };

    return (
        <div style={styles.container}>
            test
        </div>
    );
};


FullScreen.propTypes = {
    artist: PropTypes.string.isRequired,
    album: PropTypes.string.isRequired,
    albumArtUrl: PropTypes.string.isRequired,
    track: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    position: PropTypes.number.isRequired,
};

export default FullScreen;
