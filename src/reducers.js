import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import firstPageReducer from './views/first-page/first-page-reducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  firstPage: firstPageReducer,
});

export default rootReducer;
