import React, {useState} from 'react';
import {connect} from 'react-redux'

import './game-setup.styles.css';

import GameHeader  from '../game-header/game-header.component';
import {getPairedUpCardSet} from '../utilities/card-data-processing';
import {startNewGame} from '../../redux/game/game.actions';


const GameSetup = ({startNewGame}) => {

	const [level, setLevel] = useState('easy');
	const [cardCount, setCardCount] = useState("12");

    const handleCardCountSelection = (event) => {
		setCardCount(event.target.value)
	}
	const handleLevelSelection = (event) => {
		setLevel(event.target.value)
	}

	const handleStartGame = () => {
		const shuffledCards = getPairedUpCardSet(cardCount,level);
        startNewGame(shuffledCards, cardCount, level);
	} 

	const cardCountOptions=["12","16","20","24","28","32"];
	const cardLevelOptions=["easy","medium","hard"];

	return (
		<div className="game-setup">
			<GameHeader />
			<div className="config">
				<div className="config-detail">Choose your level.</div>
				{cardLevelOptions.map((value, index) => (
					<button key={index} 
						className={"config-option " + (level === value ? "config-option-selected" : "")} 
						name="cardCount" 
						value={value} 
						onClick={handleLevelSelection}
					>{value}</button>
				))}
			</div>
			<div className="config">					
				<div className="config-detail">How many cards?</div>
				{cardCountOptions.map( (value, index) => (
					<button key={index} 
						className={"config-option " + (cardCount === value ? "config-option-selected" : "")} 
						name="cardCount" 
						value={value} 
						onClick={handleCardCountSelection}
					>{value}</button>
				))}
            </div> 
			<div className="config">
				<button className="action-button" onClick={handleStartGame}>Start Game</button>
			</div>
		</div>

	)
};

const mapDispatchToProps = dispatch => ({
    startNewGame: (completeSetOfCards, cardCount, level) => dispatch(startNewGame(completeSetOfCards, cardCount, level))
});
  
export default connect(null,mapDispatchToProps)(GameSetup);