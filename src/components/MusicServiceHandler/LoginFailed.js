import React from 'react';
import PropTypes from 'prop-types';

const LoginFailed = ({ serviceProvider }) => {
    return (
        <div>
            An error occured while logging into your {serviceProvider} account.
        </div>
    );
};

LoginFailed.propTypes = {
    serviceProvider: PropTypes.oneOf(['Spotify']).isRequired,
};

export default LoginFailed;
