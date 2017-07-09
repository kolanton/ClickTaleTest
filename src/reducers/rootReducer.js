import {combineReducers} from 'redux';  
import keys from './keyReducer';
import cards from './cardReducer';
import currentCards from './currentCardReducer';
import paging from './pagingReducer';

const rootReducer = combineReducers({  
  // short hand property names
  keys,
  cards,
  currentCards,
  paging
});

export default rootReducer; 