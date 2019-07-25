import React, {Component} from 'react';
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import MusicBrowser from "../MusicBrowser/MusicBrowser";
import {container} from './MusicPage.module.scss';

class MusicPage extends Component {

    render() {
        return (
            <div className={container}>
                <MusicBrowser musicService = {this.props.musicService} />
                <MusicPlayer {...this.props}/>
            </div>
        );
    }
}

export default MusicPage;