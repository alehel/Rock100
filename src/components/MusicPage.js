import React from 'react';
import MusicPlayer from "./MusicPlayer";
import {THEME_PRIMARY_COLOR} from "../global_constants/style";

const MusicPage = props => {
    return (
        <div style={styles.container}>
            <div style={styles.content}>
            </div>
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

export default MusicPage;
