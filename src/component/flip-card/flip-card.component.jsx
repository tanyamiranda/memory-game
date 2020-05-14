import React from 'react';
import {connect} from 'react-redux';

import './flip-card.styles.css';

import {selectCard, unselectCard} from '../../redux/game/game.actions';

const FlipCard = ({cardId, cardIndex, matchedCards, selectedCardIndexes, selectCard, unselectCard}) => {

    const hideCard = matchedCards.includes(cardId);

    const cardSelected = selectedCardIndexes.includes(cardIndex);

    const flipCard = (event) => {

        const cardIndex = Number(event.currentTarget.id);
        
        //If card wasn't already in list, add it
        if (!cardSelected) {
            if (selectedCardIndexes.length === 2) 
                return;
            selectCard(cardIndex);
        } 
        //If card was in list, then remove it
        else {
            unselectCard(cardIndex);
        }
    }

    return (
        <div className="flip-card-container">
            {hideCard ? null : ( 
                <div onClick={flipCard} id={cardIndex} className={`flip-card ` + (cardSelected ? `flip-card-selected` :`flip-card-unselected`)}>
                    <div className="flip-card-front">FRONT<br/>index:{cardIndex}<br/>{cardId}</div>
                    <div className="flip-card-back">BACK<br/>index:{cardIndex}<br/>{cardId}</div>
                </div>
            )}
        </div>
    );

};

const mapStateToProps = state => ({
    resetCardIndexes: state.game.resetCardIndexes,
    matchedCards: state.game.matchedCards,
    selectedCardIndexes: state.game.selectedCardIndexes
});
  
const mapDispatchToProps = dispatch => ({
    selectCard: (cardIndex) => dispatch(selectCard(cardIndex)),
    unselectCard: (cardIndex) => dispatch(unselectCard(cardIndex)),
});
  

export default connect(mapStateToProps,mapDispatchToProps)(FlipCard);