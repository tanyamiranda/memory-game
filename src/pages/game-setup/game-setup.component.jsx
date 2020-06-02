import React from 'react';
import {connect} from 'react-redux'

import './game-setup.styles.css';

import GameTitle from '../../component/game-title/game-title.component';
import GameHeader from '../../component/game-header/game-header.component';
import GameFooter from '../../component/game-footer/game-footer.component';
import {getGameImageSet} from '../../component/utilities/game-images';
import {startNewGame} from '../../redux/game/game.actions';

const GameSetup = ({startNewGame}) => {

	const handleCardCountSelection = (event) => {
		const cardCount = event.target.value;
		const gameFlipCardSet = getGameImageSet(cardCount);
		startNewGame(gameFlipCardSet, cardCount);
	}

	const cardCountOptions=["12","16","20","24","30", "36"];
	
	return (
		<div className="game-setup">
			<div className="top-section">
				<GameHeader />
			</div>
			<div className="middle-section">
				<div className="section-block">
					<GameTitle gameTitle="Memory Game" gameDescription="Flex your brain muscles with this classic matching game." />
					<div className="config">					
						{cardCountOptions.map( (value, index) => (
							<button key={index} 
								className="config-option" 
								name="cardCount" 
								value={value} 
								onClick={handleCardCountSelection}
							>{value}-card game</button>
						))}
					
					</div>
				</div>
			</div>
			<div className="bottom-section">
				<GameFooter />
			</div>
		</div>

	)
};

const mapDispatchToProps = dispatch => ({
    startNewGame: (completeSetOfCards, cardCount, level) => dispatch(startNewGame(completeSetOfCards, cardCount, level))
});
  
export default connect(null,mapDispatchToProps)(GameSetup);