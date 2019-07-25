import React from 'react';
import albumCompilationImage from "./assets/album_compilation.png";
import LoginButton from "../LoginButton/LoginButton";
import {bodyContainer, title, bodyContent, albumArt, text} from './WelcomePage.module.scss';

const Body = () => {
    return (
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
    );
};

export default Body;
