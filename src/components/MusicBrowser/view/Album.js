import React, {Component} from 'react';
import AlbumArt from "../../AlbumArt/AlbumArt";
import * as PropTypes from "prop-types";
import '../style/style.scss';

class Album extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cover: undefined,
        }
    }

    componentDidMount() {
        const {player, uri} = this.props;

        if(this.state.cover === undefined) {
            player.getAlbumCoverUrls(uri).then(result => {
                this.setState({
                    cover: result[1].url,
                })
            })
        }
    }

    render() {
        const {artist, title, uri, player} = this.props;

        return (
            <div className="album" onClick={() => player.playTrack(uri)}>
                <div className="album-art">
                    <AlbumArt src={this.state.cover}/>
                </div>
                <div className="album-details">
                    <div className="album-details-text">{artist}</div>
                    <div className="album-details-text">{title}</div>
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

export default Album;
