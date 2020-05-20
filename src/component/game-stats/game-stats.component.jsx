import React from 'react';
import {connect} from 'react-redux';

import './game-stats.styles.css';

import {formatDisplayDateTime, getElapsedTime} from '../utilities/formatting';

const GameStats = ({startTime, endTime, totalCardFlips, totalMatchAttempts}) => {

    return (
        <div className='game-stats'>
            <div><h2>Game Statistics</h2></div>
            <div className="stats-table">
                <div className="game-stat">
                    <span className="label">Time Started:</span>
                    <span className="data">{formatDisplayDateTime(startTime)}</span>
                </div>
                <div className="game-stat">
                    <span className="label">Time Ended:</span>
                    <span className="data">{formatDisplayDateTime(endTime)}</span>
                </div>
                <div className="game-stat">
                    <span className="label">Elapsed Time:</span>
                    <span className="data">{getElapsedTime(startTime, endTime)}</span>
                </div>
                <div className="game-stat">
                    <span className="label">Total Card Flips:</span>
                    <span className="data">{totalCardFlips}</span>
                </div>
                <div className="game-stat">
                    <span className="label">Total Match Attempts:</span>
                    <span className="data">{totalMatchAttempts}</span>
                </div>
            </div>    
        </div>
    )
}

const mapStateToProps = (state) => ({
    endTime: state.game.endTime,
    startTime: state.game.startTime,
    totalCardFlips: state.game.totalCardFlips,
    totalMatchAttempts: state.game.totalMatchAttempts
})

export default connect(mapStateToProps)(GameStats);