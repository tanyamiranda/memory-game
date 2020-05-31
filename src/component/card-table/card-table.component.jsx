import React from 'react';
import {connect} from 'react-redux';

import './card-table.styles.css';

import FlipCard from  '../flip-card/flip-card.component';
import CardTableOptions from '../card-table-options/card-table-options.component';
import CardTableHeader from '../card-table-header/card-table-header.component';

const CardTable = ({completeSetOfCards, selectedCardCount}) => {

    return (
        <div className="game">
            <div className="top-section">
                <CardTableHeader />
            </div>
            <div id="middle-section" className="middle-section">
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