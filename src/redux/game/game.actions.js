import GameActionTypes from './game.types';

export const startNewGame = (completeSetOfCards, cardCount, level) => ({
    type: GameActionTypes.START_NEW_GAME,
    payload: {completeSetOfCards, cardCount, level}
})

export const selectCard = (cardIndex) => ({
    type: GameActionTypes.SELECT_CARD,
    payload: cardIndex
})

export const unselectCard = (cardIndex) => ({
    type: GameActionTypes.UNSELECT_CARD,
    payload: cardIndex
})

export const attemptToMatchCards = () => ({
    type: GameActionTypes.ATTEMPT_TO_MATCH
})

export const foundMatchingCards = (cardValue) => ({
    type: GameActionTypes.FOUND_MATCHING_CARDS,
    payload: cardValue
})

export const resetCardTable = () => ({
    type: GameActionTypes.RESET_CARD_TABLE
})

export const finishGame = () => ({
    type: GameActionTypes.FINISH_GAME
})

export const continuePlaying = () => ({
    type: GameActionTypes.CONTINUE_PLAYING
})

export const restartCurrentGame = () => ({
    type: GameActionTypes.RESTART_CURRENT_GAME
})


export const cancelCurrentGame = () => ({
    type: GameActionTypes.CANCEL_CURRENT_GAME
})

export const hideAllCards = () => ({
    type: GameActionTypes.HIDE_ALL_CARDS
})

export const showAllCards = () => ({
    type: GameActionTypes.SHOW_ALL_CARDS
})