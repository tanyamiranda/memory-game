import React from 'react';
import {connect} from 'react-redux';

import './card-table.styles.css';

import FlipCard from  '../flip-card/flip-card.component';
import CardTableHeader from '../card-table-header/card-table-header.component';

const CardTable = ({completeSetOfCards}) => {

    return (

        <div className="game">
            <div className="top-section">
                <CardTableHeader/>
            </div>
            <div id="bottom-section" className="bottom-section">
                <div className="card-table">
                { completeSetOfCards.map((card, index) => (
                    <FlipCard key={index} cardId={card} cardIndex={index} />
                ))}
                </div>
            </div>
        </div>
    )
};


const mapStateToProps = state => ({
    completeSetOfCards: state.game.completeSetOfCards
});
  
export default connect(mapStateToProps)(CardTable);