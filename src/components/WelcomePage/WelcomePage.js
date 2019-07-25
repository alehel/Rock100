import React from "react";
import Body from './Body';
import Footer from "./Footer";
import {container} from './WelcomePage.module.scss';

function WelcomePage() {
    return (
        <div className={container}>
            <Body/>
            <Footer/>
        </div>
    );
}

export default WelcomePage;