import React, {useState} from 'react';
import {connect} from 'react-redux';

import './card-table-header.styles.css';

import {getPairedUpCardSet} from '../utilities/card-data';
import {startNewGame} from '../../redux/game/game.actions';

const CardTableHeader = ({startNewGame}) => {

    const [cardCount, setCardCount] = useState(16);

    const handleCardCountSelection = (event) => {
        setCardCount(event.target.value)
    }

    const handleStartButton = () => {
        console.log("cardCount=",cardCount);
        const shuffledCards = getPairedUpCardSet(cardCount);
        startNewGame(shuffledCards);
    }

    return(

        <div className="card-table-header">
            <div className="game-config">
				<div className="config-item">
                    <select id="cardCount" name="cardCount" defaultValue="16" onChange={handleCardCountSelection}>
                        <option value="12">12 Cards</option>
                        <option value="16">16 Cards</option>
                        <option value="20">20 Cards</option>
                        <option value="24">24 Cards</option>
                        <option value="30">30 Cards</option>
                        <option value="42">42 Cards</option>
                    </select>   
                    <select id="cardType" name="cardType" defaultValue="classic">
                        <option value="classic">Classic Cards</option>
                        <option value="classic">Animals</option>
                        <option value="classic">Landscapes</option>
                        <option value="classic">Swirls</option>
                    </select>
                    <button onClick={handleStartButton}>Start New Game</button>  
				</div>
                
                    
                </div> 
        </div>

    )
}
  
const mapDispatchToProps = dispatch => ({
    startNewGame: (completeSetOfCards) => dispatch(startNewGame(completeSetOfCards))
});
  
export default connect(null,mapDispatchToProps)(CardTableHeader);
