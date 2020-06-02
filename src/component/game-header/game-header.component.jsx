import React from 'react';

import './game-header.styles.css';

import {ReactComponent as GameLogo} from '../../assets/logo-blue-green-black.svg';

const GameHeader = ({gameTitle}) => {

    return (
        <div className="game-header">
            <div className="game-header-logo"><GameLogo/></div>  
    <div className="game-header-title">Train Your Brain {gameTitle ? " - " + gameTitle : ""}</div>
        </div>
    )
}

export default GameHeader;