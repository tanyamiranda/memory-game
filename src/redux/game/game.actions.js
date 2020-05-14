import GameActionTypes from './game.types';

export const startNewGame = (completeSetOfCards) => ({
    type: GameActionTypes.START_NEW_GAME,
    payload: completeSetOfCards
})

export const selectCard = (cardIndex) => ({
    type: GameActionTypes.SELECT_CARD,
    payload: cardIndex
})

export const unselectCard = (cardIndex) => ({
    type: GameActionTypes.UNSELECT_CARD,
    payload: cardIndex
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