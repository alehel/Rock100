import React from 'react';

const LoginError = () => {
    function clearError() {
        window.location.href = "/";
    }

    return (
        <div>
            Error <button onClick={clearError}>Clear</button>
        </div>
    );
};

export default LoginError;
