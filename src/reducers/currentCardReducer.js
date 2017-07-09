import * as types from '../actions/actionTypes';  
import initialState from './initialState';

export default function currentCardReducer(state = initialState.currentCards, action) {  
  switch(action.type) {
    case types.LOAD_CURRENT_CARD:
      return action.currentCards;
    default: 
      return state;
  }
}
