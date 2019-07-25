import React from "react";
import {
    albumArt,
    bodyContainer,
    bodyContent,
    container,
    footerContainer,
    link,
    text,
    title
} from './WelcomePage.module.scss';
import albumCompilationImage from "../../assets/images/album_collage.png";
import LoginButton from "../LoginButton/LoginButton";

function WelcomePage() {
    return (
        <div className={container}>
            <div className={bodyContainer}>
                <h1 className={title}>Top 100 Rock Albums of All Time</h1>
                <div className={bodyContent}>
                    <img src={albumCompilationImage} alt="" className={albumArt}/>
                    <div className={text}>
                        <p>This website is based off of Classic Rock magazines list of top 100 rock
                            albums of all time.
                            Using your Spotify Premium account you can listen to and read about all of these legendary
                            albums.*</p>
                        <p>A Spotify Premium account is required to use this site.</p>
                        <LoginButton/>

                    </div>
                </div>
            </div>
            <footer className={footerContainer}>
                Created by <a href="https://aleksanderhelgaker.dev" className={link}>Aleksander Helgaker</a>.<br/>
                * This website is a hobby project, and is in no way affiliated with Spotify or Classic Rock magazine.
            </footer>
        </div>
    );
}

export default WelcomePage;