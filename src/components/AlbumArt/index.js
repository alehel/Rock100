import React, { Component }  from 'react';

import PropTypes from "prop-types";

class AlbumArt extends Component {
    render() {
        return <div style={styles.albumArtContainer}>
            <img src={this.props.src} alt="" style={styles.albumArt}/>
        </div>;
    }
}

const styles = {
    albumArtContainer: {
        height: '100%',
        overflow: 'hidden',
    },

    albumArt: {
        height: '100%',
    },
}

AlbumArt.propTypes = {
    src: PropTypes.string
};

export default  AlbumArt;