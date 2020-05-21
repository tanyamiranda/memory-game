import React from 'react';
import {connect} from 'react-redux';

import './card-table.styles.css';

import FlipCard from  '../flip-card/flip-card.component';
import CardTableHeader from '../card-table-header/card-table-header.component';

const CardTable = ({completeSetOfCards}) => {

    const cartTableSize = completeSetOfCards.length >= 24 ? 'medium' : 'small';

    return (
        <div className="card-table-wrapper">
            <CardTableHeader/>
            <div className={'card-table card-table-' + cartTableSize}>
                { completeSetOfCards.map((card, index) => (
                    <FlipCard key={index} cardId={card} cardIndex={index} />
                ))}
            </div>
        </div>
    )
};


const mapStateToProps = state => ({
    completeSetOfCards: state.game.completeSetOfCards
});
  
export default connect(mapStateToProps)(CardTable);