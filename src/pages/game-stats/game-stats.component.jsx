import React from 'react';
import {connect} from 'react-redux';

import './game-stats.styles.css';

import GameTitle from '../../component/game-title/game-title.component';
import GameHeader from '../../component/game-header/game-header.component';
import GameFooter from '../../component/game-footer/game-footer.component';
import {getElapsedTime} from '../../component/utilities/formatting';
import {cancelCurrentGame} from '../../redux/game/game.actions';

const GameStats = ({startTime, endTime, totalCardFlips, totalMatchAttempts, cancelCurrentGame, selectedLevel, selectedCardCount}) => {

    return (
        <div className='game-stats'>
            <div className="top-section">
				<GameHeader />
			</div>
			<div className="middle-section">
                <div className="section-block">
                    <GameTitle gameTitle="Memory Game" gameDescription="Congratulations! You've flexed your brain muscles!" />
                    <div className="stats-table">
                        <div className="game-stat">
                            <span className="label">Card Count:</span>
                            <span className="data">{selectedCardCount} cards</span>
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
            </div>
			<div className="bottom-section">
				<GameFooter />
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