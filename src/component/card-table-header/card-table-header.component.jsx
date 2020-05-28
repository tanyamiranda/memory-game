import React from 'react';
import {connect} from 'react-redux';

import './card-table-header.styles.css';

import {cancelCurrentGame, restartCurrentGame, hideAllCards, showAllCards} from '../../redux/game/game.actions';

const CardTableHeader = ({cancelCurrentGame, restartCurrentGame, cardsHidden, hideAllCards, showAllCards}) => {

    return(

        <div className="card-table-header">
            <div className="header-buttons">
                <button className="header-action-button" onClick={restartCurrentGame}>Restart</button>  
                <button className="header-action-button" onClick={cancelCurrentGame}>Cancel</button>
                { cardsHidden ? (
                    <button className="header-action-button" onClick={showAllCards}>Show All</button>
                ) : (
                    <button className="header-action-button" onClick={hideAllCards}>Hide All</button>
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
  
export default connect(mapStateToProps,mapDispatchToProps)(CardTableHeader);
