import React, {Component} from 'react';
import AlbumArt from "../AlbumArt/AlbumArt";
import * as PropTypes from "prop-types";
import {albumArt, albumDetails, container} from './AlbumDetails.module.scss';

class AlbumDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cover: undefined,
    }
  }

  componentDidMount() {
    const {player, uri} = this.props;

    if (this.state.cover === undefined) {
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
      <div className={container} onClick={() => player.playTrack(uri)}>
        <div className={albumArt}>
          <AlbumArt src={this.state.cover}/>
        </div>
        <div className={albumDetails}>
          <div>{artist}</div>
          <div>{title}</div>
        </div>
      </div>
    );
  }
}

AlbumDetails.propTypes = {
  artist: PropTypes.string,
  title: PropTypes.string,
  uri: PropTypes.any,
  cover: PropTypes.any,
  player: PropTypes.any
};

export default AlbumDetails;
