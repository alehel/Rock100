import React from 'react';
import {THEME_SECONDARY_COLOR} from "../../global_constants/style";

const HeaderBar = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Rock Top 100</h1>
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: THEME_SECONDARY_COLOR,
        color: 'white',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '25px'
    },

    title: {
        marginLeft: '25px'
    }
}

export default HeaderBar;
