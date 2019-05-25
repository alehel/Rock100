import React from 'react';
import {THEME_SECONDARY_COLOR} from "../../global_constants/style";

const NavigationHeader = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Top 100 Rock Albums</h1>
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
        justifyContent: 'center',
    },

    title: {
        fontSize: '3rem',
    }
}

export default NavigationHeader;
