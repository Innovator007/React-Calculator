import { CHANGE_THEME } from '../actions/types';
export default (state= { mode: 'light' }, action) => {
	switch(action.type) {
		case CHANGE_THEME:
			return { mode: action.payload };
		default:
			return state;
	}
}