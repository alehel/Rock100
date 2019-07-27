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
    const {musicService, uri} = this.props;

    if (this.state.cover === undefined) {
      musicService.getAlbumCoverUrls(uri).then(result => {
        this.setState({
          cover: result[1].url,
        })
      })
    }
  }

  render() {
    const {artist, title, uri, musicService} = this.props;

    return (
      <button className={container} onClick={() => musicService.playTrack(uri)}>
        <div className={albumArt}>
          <AlbumArt src={this.state.cover} title={title}/>
        </div>
        <div className={albumDetails}>
          <div>{artist}</div>
          <div>{title}</div>
        </div>
      </button>
    );
  }
}

AlbumDetails.propTypes = {
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
  musicService: PropTypes.object.isRequired
};

export default AlbumDetails;
