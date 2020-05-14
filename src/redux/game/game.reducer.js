import GameActionTypes from './game.types';

const INITIAL_STATE = {
    completeSetOfCards: [],
    matchedCards: [],
    selectedCardIndexes: [],
    resetCardIndexes: [],
    startTime: null,
    endTime: null, 
    elapsedTime: null,
    totalCardFlips: 0
}

const gameReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case GameActionTypes.START_NEW_GAME:
            return {
                ...state,
                completeSetOfCards: action.payload,
                startTime: Date.now()
            }

        case GameActionTypes.SELECT_CARD:
            state.selectedCardIndexes.push(action.payload);
            return {
                ...state,
                selectedCardIndexes: [].concat(state.selectedCardIndexes),
                totalCardFlips: state.totalCardFlips + 1
            }
        
        case GameActionTypes.UNSELECT_CARD: 
            return {
                ...state,
                selectedCardIndexes: state.selectedCardIndexes.filter(value => value !== action.payload)
            }

        case GameActionTypes.FOUND_MATCHING_CARDS:
            state.matchedCards.push(action.payload)
            return {
                ...state,
                matchedCards: [].concat(state.matchedCards),
                selectedCardIndexes: []
            }
        
        case GameActionTypes.RESET_CARD_TABLE:
            return {
                ...state,
                resetCardIndexes: state.selectedCardIndexes,
                selectedCardIndexes: []
            }
    
                
        case GameActionTypes.FINISH_GAME:
            return {
                ...state,
                endTime: Date.now(),
                elapsedTime: state.endTime - state.startTime
            }

        default:
            return state;       
    }

}

export default gameReducer;