import React from 'react';
import {connect} from 'react-redux';

import './memory-game.styles.css';

import GameStats from '../game-stats/game-stats.component';
import GameSetup from '../game-setup/game-setup.component';
import CardTable from '../card-table/card-table.component';

const MemoryGame = ({completeSetOfCards, endTime}) => {

    return (
        <div className="memory-game">
            
            {!completeSetOfCards || completeSetOfCards.length ===0 ?(
                <GameSetup />
            ) : ( endTime !== null ? 
                <GameStats />
            : (
                <CardTable />   
            ))}
        </div>
    )
};


const mapStateToProps = state => ({
    completeSetOfCards: state.game.completeSetOfCards,
    endTime: state.game.endTime
});

export default connect(mapStateToProps)(MemoryGame);