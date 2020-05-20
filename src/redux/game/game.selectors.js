import {createSelector} from 'reselect';

export const selectGame = (state) => state.game;

export const getSelectedCardIndexes = createSelector (
    [selectGame],
    game => game.selectedCardIndexes
);

export const getCompleteSetOfCards = createSelector (
    [selectGame],
    game => game.completeSetOfCards
);
