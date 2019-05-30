import React from 'react';
import PropTypes from 'prop-types';
import MusicPlayer from "./MusicPlayer";

const MusicPage = props => {
    return (
        <div style={styles.container}>
            <div style={styles.content}>{/* CONTENT GOES HERE */}</div>
            <MusicPlayer {...props}/>
        </div>
    );
};

const styles = {
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    },

    content: {
        flex: 1,
    }
}

MusicPage.propTypes = {

};

export default MusicPage;
