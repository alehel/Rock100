import React from 'react';
import PropTypes from 'prop-types';
import SpotifyLoginLink from "./MusicProviderLinks/SpotifyLoginLink";

const ServiceLoginLink = ({ serviceProvider }) => {
    return <SpotifyLoginLink/>
};

ServiceLoginLink.propTypes = {
    serviceProvider: PropTypes.oneOf(['Spotify']).isRequired,
};

export default ServiceLoginLink;
