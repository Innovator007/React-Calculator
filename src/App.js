import React, { Component } from 'react';
import { 
  changeTheme, 
  calculateScientific,
  calculate,
  calculateIntermediate,
  reset,
  backspace,
  updateResult
} from './actions/index';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Result from './components/Result';
import Keypad from './components/Keypad';
import Theme from './components/Theme';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "0",
      display: "0"
    }
  }

  onClick = button => {
    const operators = ["+", "-", "*", "/", "**2", "**0.5","-ve"];
      if(operators.includes(button)) {
        if(button === "**2" || button === "**0.5" || button === "-ve") {
          this.props.calculateScientific(button, this.props.result, this.props.display);
        } else {
          console.log(this.props.result, this.props.display, button);
          this.props.calculateIntermediate(button, this.props.result, this.props.display);
        }
      }

      else if(button === "="){
          this.props.calculate(this.props.result, this.props.display);
      }

      else if(button === "C"){
          this.props.reset();
      }
      else if(button === "CE"){
          this.props.backspace(this.props.result, this.props.display);
      }

      else {
          let {result, display} = this.props;
          if(result === "0" || result === "ERROR") {
            result = "";
            display = "";
          }
          result += button;
          if(!operators.includes(button)) {
            if(operators.includes(this.props.result[this.props.result.length-1])) {
              display = button;
            } else {
              display += button;
            }
          }
          this.props.updateResult(result, display);
      }
  };

  changeTheme = () => {
    const theme = this.props.theme === "light" ? "dark" : "light";
    this.props.changeTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
  }

  render() {
    return (
      <div className="main-container">
        <h1 className="heading">React Calculator</h1>
        <div className="calculator">
          <Result result={this.props.result} display={this.props.display} />
          <Keypad onClick={this.onClick} />
        </div>
        <Theme onClick={this.changeTheme} />
      </div>
    );
  }
}

function mapStateToProps (state) {
  return { 
    theme: state.theme.mode,
    result: state.calc.result,
    display: state.calc.display
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      changeTheme: changeTheme,
      calculateScientific: calculateScientific,
      calculate: calculate,
      calculateIntermediate: calculateIntermediate,
      reset: reset,
      backspace: backspace,
      updateResult: updateResult
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
