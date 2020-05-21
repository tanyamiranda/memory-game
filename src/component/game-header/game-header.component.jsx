import React from 'react';

import './game-header.styles.css';

import {ReactComponent as GameLogo} from '../../assets/game-logo.svg';

const GameHeader = ({headerText}) => {

    return (
        <div className="game-header">
            <div className="header-logo"><GameLogo/></div>
            <div className="header-title">Brain Training</div>
            <div className="header-text">{headerText}</div>
        </div>
    )
}

export default GameHeader;