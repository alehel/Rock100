import React from 'react';
import {button, iconImage} from './ControlButton.module.scss';

const ControlButton = ({onClick, description, icon, size}) => {
    return (
        <button className={button} onClick={onClick}>
            <img className={iconImage} style={{height: size, width: size}} src={icon} alt={description}/>
        </button>
    )
}

export default ControlButton;