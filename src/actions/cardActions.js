import * as types from './actionTypes';
import workerApi from '../api/workersApi';
import { loadPaging } from './pagingActions';

export function loadCardsSuccess(cards) {
    return { type: types.LOAD_CARDS, cards };
}

export function loadCards(cards) {
    return function (dispatch) {
        dispatch(loadCardsSuccess(cards));
    };
}