import React from 'react';
import {connect} from 'react-redux';

import './flip-card.styles.css';

import {ReactComponent as GameLogo} from '../../assets/logo-card-backs.svg';
import {selectCard, unselectCard} from '../../redux/game/game.actions';

const FlipCard = ({cardId, cardIndex, matchedCards, selectedCardIndexes, selectCard, unselectCard, completeSetOfCards}) => {

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

    const cardSize = completeSetOfCards.length >=30 ? '-small' : completeSetOfCards.length >=20 ? '-medium' : '-large';


    return (
        <div className={'flip-card-container' + cardSize}>
            {hideCard ? null : ( 
                <div onClick={flipCard} id={cardIndex} className={`flip-card ` + (cardSelected ? `flip-card-selected` :`flip-card-unselected`)}>
                    <div className="flip-card-front"><GameLogo/></div>
                    <div className="flip-card-back">{cardId}</div>
                </div>
            )}
        </div>
    );

};

const mapStateToProps = state => ({
    completeSetOfCards: state.game.completeSetOfCards,
    matchedCards: state.game.matchedCards,
    selectedCardIndexes: state.game.selectedCardIndexes
});
  
const mapDispatchToProps = dispatch => ({
    selectCard: (cardIndex) => dispatch(selectCard(cardIndex)),
    unselectCard: (cardIndex) => dispatch(unselectCard(cardIndex)),
});
  

export default connect(mapStateToProps,mapDispatchToProps)(FlipCard);