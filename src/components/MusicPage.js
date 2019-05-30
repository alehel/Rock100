import React from 'react';
import PropTypes from 'prop-types';
import MusicPlayer from "./MusicPlayer";
import {THEME_PRIMARY_COLOR} from "../global_constants/style";

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
        backgroundColor: THEME_PRIMARY_COLOR,
    }
}

MusicPage.propTypes = {

};

export default MusicPage;
