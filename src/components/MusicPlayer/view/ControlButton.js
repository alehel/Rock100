import React from 'react';
import Radium from "radium";

const ControlButton = ({onClick, description, icon, size}) => {
    const styles = {
        button: {
            backgroundColor: 'transparent',
            border: 'none',
            ':hover': {
                cursor: 'pointer',
            },
            margin: '0 1rem',
        },

        icon: {
            height: size,
            width: size,
            overflow: 'hidden',
        }
    }

    return (
        <button style={styles.button} onClick={onClick}>
            <img style={styles.icon} src={icon} alt={description}/>
        </button>
    );
};


export default Radium(ControlButton);
