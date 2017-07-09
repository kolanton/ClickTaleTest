import * as types from './actionTypes';
import workerApi from '../api/workersApi';
import { loadPagingNew } from './pagingActions';

export function loadKeysSuccess(keys) {
    return { type: types.LOAD_KEYS, keys };
}

export function loadKeys(key) {
    return function (dispatch) {
        let keys = workerApi.getKeys(key);
        dispatch(loadKeysSuccess(keys));
        dispatch(loadPagingNew(key));
    };
}