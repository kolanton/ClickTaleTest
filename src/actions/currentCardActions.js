import * as types from './actionTypes';
import workerApi from '../api/workersApi';

export function loadCurrentCard(cards) {
    let currentCards= cards.slice(0,1);
    return { type: types.LOAD_CURRENT_CARD, currentCards };
}