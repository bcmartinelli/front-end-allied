import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import offers from './offers';

const rootReducer = combineReducers({
  form: formReducer,
  offers,
});

export default rootReducer;
