import React from 'react';

import './game-title.styles.css';

const GameTitle = ({gameTitle, gameDescription}) => {
    return (
        <div className="game-title">
            <div className="title">{gameTitle}</div>
            <div className="description">{gameDescription}</div>
        </div>
    )
}

export default GameTitle;