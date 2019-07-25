import React from 'react';
import {footerContainer, link} from './WelcomePage.module.scss';

const Footer = () => {
    return (
            <footer className={footerContainer}>
                Created by <a href="https://aleksanderhelgaker.dev" className={link}>Aleksander Helgaker</a>.<br/>
                * This website is a hobby project, and is in no way affiliated with Spotify or Classic Rock magazine.
            </footer>

    );
};

export default Footer;
