import {combineReducers} from 'redux';

import gameReducer from './game/game.reducer';

export default combineReducers({
  game: gameReducer
});