import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import scientificReducer from './scientificReducer';
import calcReducer from './calcReducer';

export default combineReducers({
	theme: themeReducer,
	scientific: scientificReducer,
	calc: calcReducer
})