import React from 'react';
import {connect} from 'react-redux';

import {GAME_IMAGES} from './flip-card-images';
import './flip-card.styles.css';

import {ReactComponent as GameLogo} from '../../assets/logo-card-backs.svg';
import {selectCard, unselectCard} from '../../redux/game/game.actions';

const FlipCard = ({cardId, cardIndex, matchedCards, selectedCardIndexes, selectCard, unselectCard, cardsHidden}) => {

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

    const flipCardClassNames = "flip-card " 
        + (cardSelected || !cardsHidden ? " flip-card-selected" : "")
        + (cardSelected && !cardsHidden ? " show-all-highlight-selected" : "");

    const svg = GAME_IMAGES[cardId];
    
    return (
        <div className="flip-card-container">
            {hideCard ? null : ( 
                <div onClick={flipCard} id={cardIndex} className={flipCardClassNames}>
                    <div className="flip-card-front"><GameLogo/></div>
                    <div className="flip-card-back"><img className="card-image" src={svg} alt={cardId} /></div>
                </div>
            )}
        </div>
    );

};

const mapStateToProps = state => ({
    matchedCards: state.game.matchedCards,
    selectedCardIndexes: state.game.selectedCardIndexes,
    cardsHidden : state.game.cardsHidden
});
  
const mapDispatchToProps = dispatch => ({
    selectCard: (cardIndex) => dispatch(selectCard(cardIndex)),
    unselectCard: (cardIndex) => dispatch(unselectCard(cardIndex)),
});
  

export default connect(mapStateToProps,mapDispatchToProps)(FlipCard);