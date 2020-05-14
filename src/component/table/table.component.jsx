import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import './table.styles.css';

import FlipCard from  '../flip-card/flip-card.component';

import {getPairedUpCardSet} from '../utilities/card-data';

import {startNewGame} from '../../redux/game/game.actions';

const Table = ({completeSetOfCards, startNewGame}) => {

    useEffect(() => {

        if(completeSetOfCards.length === 0) {

            console.log("Getting randome cards...");

            const cardRows = 4;
            const cardColumns = 3;
            const cardCount = cardRows * cardColumns;

            // All cardIds are in format num + "_1" and num + "_2"
            const shuffledCards = getPairedUpCardSet(cardCount);
            
            startNewGame(shuffledCards);
        }

    },[completeSetOfCards,startNewGame])  

    return (
        <div className="table">
            {completeSetOfCards.map((card, index) => 
                <FlipCard key={index} 
                    cardId={card} 
                    cardIndex={index} />
            )}
        </div>
    )
};


const mapStateToProps = state => ({
    completeSetOfCards: state.game.completeSetOfCards
});
  
const mapDispatchToProps = dispatch => ({
    startNewGame: (completeSetOfCards) => dispatch (startNewGame(completeSetOfCards))
});
  

export default connect(mapStateToProps,mapDispatchToProps)(Table);