import React from 'react';
import {THEME_SECONDARY_COLOR} from "../../global_constants/style";

const Footer = () => {
    return (
        <div style={styles.container}>
            <div style={styles.text}>
                Created by <a href="https://aleksanderhelgaker.dev" style={styles.link}>Aleksander Helgaker</a>.<br/>
                This website is a hobby project, and is in no way affiliated with Spotify or Classic Rock Magazine.
            </div>
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: THEME_SECONDARY_COLOR,
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        padding: '15px 0',
        marginTop: '25px'
    },

    text: {
        marginLeft: '25px',
        lineHeight: '1.6',
    },

    link: {
        color: 'white',
    }
}

export default Footer;
