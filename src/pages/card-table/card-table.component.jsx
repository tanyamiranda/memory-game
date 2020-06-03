import React from 'react';
import {connect} from 'react-redux';

import './card-table.styles.css';

import FlipCard from  '../../component/flip-card/flip-card.component';
import CardTableOptions from '../../component/card-table-options/card-table-options.component';
import GameHeader from '../../component/game-header/game-header.component';

const CardTable = ({completeSetOfCards, selectedCardCount}) => {

    return (
        <div className="game">
            <div className="top-section">
                <GameHeader gameTitle="Memory Game" />
            </div>
            <div className="middle-section">
                <div className={"card-table card-table-" + selectedCardCount}>
                { completeSetOfCards.map((card, index) => (
                    <FlipCard key={index} cardId={card} cardIndex={index} />
                ))}
                </div>
            </div>
            <div className="bottom-section">
                <CardTableOptions/>
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    completeSetOfCards: state.game.completeSetOfCards,
    selectedCardCount: state.game.selectedCardCount
});
  
export default connect(mapStateToProps)(CardTable);