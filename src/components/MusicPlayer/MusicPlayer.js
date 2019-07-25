import React, {Component} from 'react';
import FullScreen from './view/FullScreen';
import PropTypes from "prop-types";
import MusicPlayerBar from "../MusicPlayerBar/MusicPlayerBar";

class MusicPlayer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullScreen: false,
        }

        this.toggleFullScreen = this.toggleFullScreen.bind(this);
    }

    toggleFullScreen() {
        const fullScreen = !this.state.fullScreen;
        this.setState({fullScreen});
    }

    render() {
        if(this.state.fullScreen) {
            return <FullScreen {...this.props} display={this.state.fullScreen} closeFullScreen={this.toggleFullScreen}/>
        } else {
            return <MusicPlayerBar {...this.props} display={this.state.fullScreen} openFullScreen={this.toggleFullScreen}/>
        }
    }
}

MusicPlayer.propTypes = {
    artist: PropTypes.string.isRequired,
    album: PropTypes.string.isRequired,
    albumArt: PropTypes.string,
    track: PropTypes.string.isRequired,
};

export default MusicPlayer;
