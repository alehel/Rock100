import React from 'react';
import {button, iconImage} from './ControlButton.module.scss';
import propTypes from 'prop-types';

const ControlButton = ({onClick, description, icon, size}) => {
    return (
        <button className={button} onClick={onClick}>
            <img className={iconImage} style={{height: size, width: size}} src={icon} alt={description}/>
        </button>
    )
}

ControlButton.propTypes = {
  onClick: propTypes.func.isRequired,
  description: propTypes.string.isRequired,
  icon: propTypes.string.isRequired,
  size: propTypes.string.isRequired
}

export default ControlButton;