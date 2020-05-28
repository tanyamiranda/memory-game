import React from 'react';
import {connect} from 'react-redux';

import './flip-card.styles.css';
import './flip-card-sizes.css';

import {ReactComponent as GameLogo} from '../../assets/logo-card-backs.svg';
import {selectCard, unselectCard} from '../../redux/game/game.actions';
import {SYMBOL_HEARTS, SYMBOL_DIAMONDS} from '../utilities/card-data-processing';

const FlipCard = ({cardId, cardIndex, matchedCards, selectedCardIndexes, selectCard, unselectCard, completeSetOfCards, cardsHidden, selectedCardCount}) => {

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

    //const cardSize = completeSetOfCards.length >=30 ? '-small' : completeSetOfCards.length >=20 ? '-medium' : '-large';
    const cardDisplay = cardId.split(",");

    const flipCardClassNames = "flip-card " 
        + (cardSelected || !cardsHidden ? " flip-card-selected" : "")
        + (cardSelected && !cardsHidden ? " show-all-highlight-selected" : "");

    return (
        <div className={"flip-card-container cards-" + selectedCardCount }>
            {hideCard ? null : ( 
                <div onClick={flipCard} id={cardIndex} className={flipCardClassNames}>
                    <div className="flip-card-front"><GameLogo/></div>
                    <div className="flip-card-back">
                        {
                            cardDisplay.map((value, index )=> 
                                <div className={"card-display" + (value.includes(SYMBOL_HEARTS) || value.includes(SYMBOL_DIAMONDS) ? ' card-display-red' : '')} key={index}>
                                    {value.substring(0,1) + value.substring(1,2)}
                                </div>
                            )
                        }
                    </div>
                </div>
            )}
        </div>
    );

};

const mapStateToProps = state => ({
    completeSetOfCards: state.game.completeSetOfCards,
    matchedCards: state.game.matchedCards,
    selectedCardIndexes: state.game.selectedCardIndexes,
    cardsHidden : state.game.cardsHidden,
    selectedCardCount : state.game.selectedCardCount
});
  
const mapDispatchToProps = dispatch => ({
    selectCard: (cardIndex) => dispatch(selectCard(cardIndex)),
    unselectCard: (cardIndex) => dispatch(unselectCard(cardIndex)),
});
  

export default connect(mapStateToProps,mapDispatchToProps)(FlipCard);