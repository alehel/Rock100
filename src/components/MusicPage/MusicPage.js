import React, {Component} from 'react';
import MusicPlayer from "../MusicPlayer";
import MusicBrowser from "../MusicBrowser/MusicBrowser";

const styles = {
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '100vh',
        maxWidth: '100vw'
    },
}

class MusicPage extends Component {

    render() {
        return (
            <div style={styles.container}>
                <MusicBrowser spotifyAPI = {this.props.spotifyAPI} />
                <MusicPlayer {...this.props}/>
            </div>
        );
    }
}


export default MusicPage;
