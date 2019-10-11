import { TOGGLE_SCIENTIFIC } from '../actions/types';
export default (state= { mode: false }, action) => {
	switch(action.type) {
		case TOGGLE_SCIENTIFIC:
			return { mode: action.payload };
		default:
			return state;
	}
}