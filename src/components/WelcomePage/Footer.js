import React from 'react';

const Footer = () => {
    return (
            <footer style={styles.text}>
                Created by <a href="https://aleksanderhelgaker.dev" style={styles.link}>Aleksander Helgaker</a>.<br/>
                * This website is a hobby project, and is in no way affiliated with Spotify or Classic Rock magazine.
            </footer>

    );
};

const styles = {
    text: {
        color: 'white',
        backgroundColor: 'black',
        lineHeight: '1.2rem',
        padding: '0.4rem 0.6rem',
        fontSize: '0.8rem',
    },

    link: {
        color: 'white',
    }
};

export default Footer;
