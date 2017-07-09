import * as types from '../actions/actionTypes';  
import initialState from './initialState';

export default function keyReducer(state = initialState.keys, action) {  
  switch(action.type) {
    case types.LOAD_KEYS:
      return action.keys;
    default: 
      return state;
  }
}