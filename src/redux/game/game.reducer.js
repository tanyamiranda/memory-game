import GameActionTypes from './game.types';

const INITIAL_STATE = {
    selectedCardCount: null,
    cardsHidden: true,
    completeSetOfCards: [],
    matchedCards: [],
    selectedCardIndexes: [],
    startTime: null,
    endTime: null, 
    totalCardFlips: 0,
    totalMatchAttempts: 0
}

const gameReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case GameActionTypes.START_NEW_GAME:
            return {
                completeSetOfCards: action.payload.completeSetOfCards,
                selectedCardCount: action.payload.cardCount,
                cardsHidden: true,
                matchedCards: [],
                selectedCardIndexes: [],
                startTime: Date.now(),
                endTime: null, 
                totalCardFlips: 0,
                totalMatchAttempts: 0
            }

        case GameActionTypes.RESTART_CURRENT_GAME:
            return {
                ...state,
                matchedCards: [],
                selectedCardIndexes: [],
                startTime: Date.now(),
                totalCardFlips: 0,
                totalMatchAttempts: 0
            }

        case GameActionTypes.CANCEL_CURRENT_GAME:
            return {
                completeSetOfCards: [],
                matchedCards: [],
                selectedCardIndexes: [],
                startTime: null,
                endTime: null, 
                totalCardFlips: 0,
                totalMatchAttempts: 0
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

        case GameActionTypes.ATTEMPT_TO_MATCH:
            return {
                ...state,
                totalMatchAttempts: state.totalMatchAttempts + 1
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
                selectedCardIndexes: []
            }
    
                
        case GameActionTypes.FINISH_GAME:
            return {
                ...state,
                endTime: Date.now()
            }

        case GameActionTypes.SHOW_ALL_CARDS:
            return {
                ...state,
                cardsHidden: false
            }
        
        case GameActionTypes.HIDE_ALL_CARDS:
            return {
                ...state,
                cardsHidden: true
            }

        default:
            return state;       
    }

}

export default gameReducer;