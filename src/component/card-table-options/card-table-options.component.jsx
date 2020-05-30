import React from 'react';
import {connect} from 'react-redux';

import './card-table-options.styles.css';

import {cancelCurrentGame, restartCurrentGame, hideAllCards, showAllCards} from '../../redux/game/game.actions';

const CardTableOptions = ({cancelCurrentGame, restartCurrentGame, cardsHidden, hideAllCards, showAllCards}) => {

    return(

        <div className="card-table-options">
            <div className="option-list">
                <button className="card-table-action-button" onClick={restartCurrentGame}>Restart</button>  
                <button className="card-table-action-button" onClick={cancelCurrentGame}>Cancel</button>
                { cardsHidden ? (
                    <button className="card-table-action-button" onClick={showAllCards}>Show All</button>
                ) : (
                    <button className="card-table-action-button" onClick={hideAllCards}>Hide All</button>
                )}
            </div>
        </div>

    )
}
  
const mapStateToProps = state => ({
    cardsHidden : state.game.cardsHidden
})

const mapDispatchToProps = dispatch => ({
    cancelCurrentGame: () => dispatch(cancelCurrentGame()),
    restartCurrentGame: () => dispatch(restartCurrentGame()),
    hideAllCards: () => dispatch(hideAllCards()),
    showAllCards: () => dispatch(showAllCards()) 
});
  
export default connect(mapStateToProps,mapDispatchToProps)(CardTableOptions);
