import React from 'react';
import {connect} from 'react-redux';

import GameStats from '../game-stats/game-stats.component';
import GameSetup from '../game-setup/game-setup.component';
import CardTable from '../card-table/card-table.component';

const PlayGame = ({completeSetOfCards, endTime}) => {

    return (
        <div className="play-game">
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

export default connect(mapStateToProps)(PlayGame);