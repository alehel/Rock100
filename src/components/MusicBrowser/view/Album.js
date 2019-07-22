import React, {Component} from 'react';
import AlbumArt from "../../AlbumArt";
import * as PropTypes from "prop-types";

class Album extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cover: undefined,
        }
    }

    componentDidMount() {
        if(this.state.cover === undefined) {
            this.props.player.getAlbumCoverUrls(this.props.uri).then(result => {
                this.setState({
                    cover: result[1].url,
                })
            })
        }
    }

    render() {
        console.log(this.state.cover)
        let {artist, title, uri, player} = this.props;

        return (
            <div style={styles.container} onClick={() => player.playTrack(uri)}>
                <div style={styles.albumArt}>
                    <AlbumArt src={this.state.cover}/>
                </div>
                <div style={styles.albumDetails}>
                    {artist}<br/>
                    {title}
                </div>
            </div>
        );
    }
}

Album.propTypes = {
    artist: PropTypes.any,
    title: PropTypes.any,
    uri: PropTypes.any,
    cover: PropTypes.any,
    player: PropTypes.any
}

const containerWidth = '200px';
const containerHeight = '280px';

const styles = {
    container: {
        width: containerWidth,
        height: containerHeight,
        padding: 0,
        margin: '1rem',
    },
    albumArt: {
        width: '100%',
        height: containerWidth
    },
    albumDetails: {

    }
}

export default Album;
