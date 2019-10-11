import { 
	CALC_SCIENTIFIC, 
	CALC_TOTAL,
	CALC_RESET,
	CALC_BACKSPACE,
	CALC_INTERMEDIATE,
	CALC_UPDATE_RESULT
} from '../actions/types';

export default (state= { result: "0", display: "0" }, action) => {
	switch(action.type) {
		case CALC_TOTAL:
		case CALC_SCIENTIFIC:
		case CALC_INTERMEDIATE:
		case CALC_RESET:
		case CALC_BACKSPACE:
		case CALC_UPDATE_RESULT:
			return { result: action.payload.result, display: action.payload.display };
		default:
			return state;
	}
}