import {takeLatest, put, all, call, delay, select} from 'redux-saga/effects';

import GameActionTypes from './game.types';

import {foundMatchingCards, resetCardTable, continuePlaying, finishGame, attemptToMatchCards} from './game.actions';

export function* evaluateSelection() {

    const selectGame = (state) => state.game;
    const game = yield select(selectGame);

    if (game.selectedCardIndexes.length===2) {

        yield put(attemptToMatchCards());

        const cardIndexValue1 = game.completeSetOfCards[game.selectedCardIndexes[0]];
        const cardIndexValue2 = game.completeSetOfCards[game.selectedCardIndexes[1]];

        if(cardIndexValue1 === cardIndexValue2 ) {
            yield delay(500);
            yield put(foundMatchingCards(cardIndexValue1));

            if (game.matchedCards.length === (game.completeSetOfCards.length / 2)) {
                yield put(finishGame());
            }
        }
        else {
            yield delay(700); //delay to allow for front end card flipping
            yield put(resetCardTable());
        }

    }
    else {
        yield put(continuePlaying());
    }
}	

export function* onCardSelectEvaluateSelection() {
    yield takeLatest(
        GameActionTypes.SELECT_CARD, 			
        evaluateSelection
    )
}


export function* gameSagas() {
    yield all([
        call(onCardSelectEvaluateSelection)
    ]);
}