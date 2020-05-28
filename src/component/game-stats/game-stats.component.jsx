import React from 'react';
import {connect} from 'react-redux';

import './game-stats.styles.css';

import GameHeader  from '../game-header/game-header.component';
import {formatDisplayDateTime, getElapsedTime} from '../utilities/formatting';
import {cancelCurrentGame} from '../../redux/game/game.actions';

const GameStats = ({startTime, endTime, totalCardFlips, totalMatchAttempts, cancelCurrentGame, selectedLevel, selectedCardCount}) => {

    return (
        <div className='game-stats'>
            <GameHeader headerText="Congratulations! You've trained your brain!" />
            <div className="stats-table">
                <div className="game-stat">
                    <span className="label">Setup:</span>
                    <span className="data">{selectedCardCount} cards, {selectedLevel} level</span>
                </div>
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
                    <span className="label">Card Flips:</span>
                    <span className="data">{totalCardFlips}</span>
                </div>
                <div className="game-stat">
                    <span className="label">Match Attempts:</span>
                    <span className="data">{totalMatchAttempts}</span>
                </div>
            </div>    
            <div>
                <button onClick={cancelCurrentGame} className="action-button">Start New Game</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    endTime: state.game.endTime,
    startTime: state.game.startTime,
    totalCardFlips: state.game.totalCardFlips,
    totalMatchAttempts: state.game.totalMatchAttempts,
    selectedLevel : state.game.selectedLevel,
    selectedCardCount : state.game.selectedCardCount
})

const mapDispatchToProps = dispatch => ({
    cancelCurrentGame: () => dispatch(cancelCurrentGame())
});

export default connect(mapStateToProps, mapDispatchToProps)(GameStats);