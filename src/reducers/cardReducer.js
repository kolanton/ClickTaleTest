import * as types from '../actions/actionTypes';  
import initialState from './initialState';

export default function cardReducer(state = initialState.cards, action) {  
  switch(action.type) {
    case types.LOAD_CARDS:
      return action.cards;
    default: 
      return state;
  }
}

