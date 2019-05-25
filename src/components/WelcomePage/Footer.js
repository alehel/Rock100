import React from 'react';
import {THEME_SECONDARY_COLOR} from "../../global_constants/style";

const Footer = () => {
    return (
        <div style={styles.container}>
            <div style={styles.text}>
                Created by <a href="https://aleksanderhelgaker.dev" style={styles.link}>Aleksander Helgaker</a>.<br/>
                * This website is a hobby project, and is in no way affiliated with Spotify or Classic Rock magazine.
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
    },

    text: {
        marginLeft: '1.2rem',
        lineHeight: '1.2rem',
        fontSize: '0.8rem',
    },

    link: {
        color: 'white',
    }
};

export default Footer;
