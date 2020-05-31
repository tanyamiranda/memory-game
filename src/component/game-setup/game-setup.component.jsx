import React from 'react';
import {connect} from 'react-redux'

import './game-setup.styles.css';

import GameHeader  from '../game-header/game-header.component';
import {getGameImageSet} from '../utilities/game-images';
import {startNewGame} from '../../redux/game/game.actions';

const GameSetup = ({startNewGame}) => {

	const handleCardCountSelection = (event) => {
		const cardCount = event.target.value;
		const gameFlipCardSet = getGameImageSet(cardCount);
		startNewGame(gameFlipCardSet, cardCount);
	}

	const cardCountOptions=["12","16","20","24","30"];
	
	return (
		<div className="game-setup">
			<GameHeader headerText="Train your brain everyday with memory games." />
			<div className="config">					
				{cardCountOptions.map( (value, index) => (
					<button key={index} 
						className="config-option" 
						name="cardCount" 
						value={value} 
						onClick={handleCardCountSelection}
					>{value} card game</button>
				))}
            </div> 
			
		</div>

	)
};

const mapDispatchToProps = dispatch => ({
    startNewGame: (completeSetOfCards, cardCount, level) => dispatch(startNewGame(completeSetOfCards, cardCount, level))
});
  
export default connect(null,mapDispatchToProps)(GameSetup);