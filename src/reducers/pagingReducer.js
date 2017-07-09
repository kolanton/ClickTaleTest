import * as types from '../actions/actionTypes';  
import initialState from './initialState';

export default function pagingReducer(state = initialState.paging, action) {  
  switch(action.type) {
    case types.LOAD_PAGING:
      return action.paging;
    default: 
      return state;
  }
}