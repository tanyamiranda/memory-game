import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import './card-table.styles.css';

import FlipCard from  '../flip-card/flip-card.component';
import GameStats from '../game-stats/game-stats.component';
import CardTableHeader from '../card-table-header/card-table-header.component';

import {getPairedUpCardSet} from '../utilities/card-data';
import {startNewGame} from '../../redux/game/game.actions';

const CardTable = ({completeSetOfCards, startNewGame, endTime, cardCount}) => {
    useEffect(() => {

        if(completeSetOfCards.length === 0) {

            console.log("Getting randome cards...");

            const cardCount = 12;

            // All cardIds are in format num + "_1" and num + "_2"
            const shuffledCards = getPairedUpCardSet(cardCount);

            startNewGame(shuffledCards);
        }

    },[completeSetOfCards,startNewGame, cardCount])  

    const cartTableSize = completeSetOfCards.length >= 24 ? 'medium' : 'small';


    return (
        <div>
            <CardTableHeader/>
            {endTime !== null ? 
                <GameStats />
            : (
                <div className={'card-table card-table-' + cartTableSize}>
                    { completeSetOfCards.map((card, index) => (
                        <FlipCard key={index} cardId={card} cardIndex={index} />
                    ))}
                </div>
            )}
        </div>
    )
};


const mapStateToProps = state => ({
    completeSetOfCards: state.game.completeSetOfCards,
    endTime: state.game.endTime
});
  
const mapDispatchToProps = dispatch => ({
    startNewGame: (completeSetOfCards) => dispatch (startNewGame(completeSetOfCards))
});
  

export default connect(mapStateToProps,mapDispatchToProps)(CardTable);