import React from 'react';
import PropTypes from 'prop-types';
import SpotifyLoginLink from "./MusicServices/SpotifyLoginLink";

const MusicServiceLoginLink = ({ serviceProvider }) => {
    return <SpotifyLoginLink/>
};

MusicServiceLoginLink.propTypes = {
    serviceProvider: PropTypes.oneOf(['Spotify']).isRequired,
};

export default MusicServiceLoginLink;
