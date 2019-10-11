import { 
	CHANGE_THEME,
	TOGGLE_SCIENTIFIC, 
	CALC_SCIENTIFIC,
	CALC_TOTAL,
	CALC_RESET,
	CALC_BACKSPACE,
	CALC_INTERMEDIATE,
	CALC_UPDATE_RESULT
} from './types';

export function changeTheme(mode) {
	return {
		type: CHANGE_THEME,
		payload: mode
	}
}

export function toggleScientific(mode) {
	return {
		type: TOGGLE_SCIENTIFIC,
		payload: mode
	}
}

export function calculate(result, display) {
	if(result !== "0") {
      try {
        // eslint-disable-next-line
        const res = (eval(result) || "" ) + "";
        return {  
        	type: CALC_TOTAL,
        	payload: {
        		result: res,
        		display: res
        	}
        }
      } catch (e) {
        return {  
        	type: CALC_TOTAL,
        	payload: {
        		result: "ERROR",
        		display: "ERROR"
        	}
        }
      }
    }
}

export function reset() {
	return {
		type: CALC_RESET,
		payload: {
			result: "0",
			display: "0"
		}
	}
}

export function backspace(result, display) {
      if(display === result) {
        if(result.length === 1 || result === "ERROR") {
          result = "0";
          display = "0";
        } else {
          result = result.slice(0, -1);
          display = display.slice(0, -1);
        }
      } else {
        if(result.length === 1 || result === "ERROR") {
          result = "0";
          display = "0";
        } else {
          result = result.slice(0, -1);
          if(["+","-","*","/", "**2", "**0.5"].includes(result[result.length-1])) {
            display = result.slice(0, -1);
          } else {
            display = result;
          }
        }
      }
     return {
     	type: CALC_BACKSPACE,
     	payload: {
     		result,
     		display
     	}
     }
}

export function calculateIntermediate(button, result, display) {
	try {
        // eslint-disable-next-line
	    let newResult = eval(result);
	    return {
	    	type: CALC_INTERMEDIATE,
	    	payload: {
	    		result: newResult + button,
	    		display: newResult
	    	}
	    }
	  } catch (e) {
      	return {
	    	type: CALC_INTERMEDIATE,
	    	payload: {
	    		result: "ERROR",
	    		display: "ERROR"
	    	}
	    }
	  }
}

export function updateResult(result, display) {
	return {
		type: CALC_UPDATE_RESULT,
		payload: {
			result,
			display
		}
	}
}

export function calculateScientific(button, result, display) {
	if(button !== "-ve") {
        var res;
        try {
          // eslint-disable-next-line
          res = eval(result + button);
        } catch(e) {
          res = "ERROR";
        }
        return {
        	type: CALC_SCIENTIFIC,
        	payload: { 
        		result: res, 
        		display: res
        	}
        }
      } else {
        if(/^\d+$/.test(result)) {
          result = -result;
          display = result;
        }
        return {
        	type: CALC_SCIENTIFIC,
        	payload: { 
        		result, 
        		display
        	}
        }
      }
}