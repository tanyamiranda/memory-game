import React from 'react';
import {connect} from 'react-redux';

import './card-table-header.styles.css';

import {cancelCurrentGame, restartCurrentGame} from '../../redux/game/game.actions';

const CardTableHeader = ({cancelCurrentGame, restartCurrentGame}) => {

    return(

        <div className="card-table-header">
            <div className="header-buttons">
                <button className="header-action-button" onClick={restartCurrentGame}>Restart</button>  
                <button className="header-action-button" onClick={cancelCurrentGame}>Cancel</button>
            </div>
        </div>

    )
}
  
const mapDispatchToProps = dispatch => ({
    cancelCurrentGame: () => dispatch(cancelCurrentGame()),
    restartCurrentGame: () => dispatch(restartCurrentGame()),
});
  
export default connect(null,mapDispatchToProps)(CardTableHeader);
