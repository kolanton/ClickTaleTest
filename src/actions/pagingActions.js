import * as types from './actionTypes';
import workerApi from '../api/workersApi';
import { loadCards } from './cardActions';

export function loadPaging(paging) {
    return { type: types.LOAD_PAGING, paging };
}

export function loadPagingNew(key, page = 0) {
    return function (dispatch) {
        let data = workerApi.getWorkerDataByKey(key, page);
        dispatch(loadCards(data.cardsData));
        dispatch(loadPaging(data.pagingData));
    };
}