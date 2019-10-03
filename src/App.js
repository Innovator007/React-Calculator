import React, { Component } from 'react';
import Result from './components/Result';
import Keypad from './components/Keypad';
import Theme from './components/Theme';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "0",
      display: "0",
      theme: "light"
    }
  }

  onClick = button => {
      const operators = ["+", "-", "*", "/", "**2", "**0.5","-ve"];
        if(operators.includes(button)) {
          if(button === "**2" || button === "**0.5" || button === "-ve") {
            this.calculateScientific(button);
          } else {
            this.calculateIntermediate(button);
          }
        }

        else if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            let {result, display} = this.state;
            if(result === "0" || result === "ERROR") {
              result = "";
              display = "";
            }
            result += button;
            if(!operators.includes(button)) {
              if(operators.includes(this.state.result[this.state.result.length-1])) {
                display = button;
              } else {
                display += button;
              }
            }
            this.setState({
                result,
                display
            })
        }
    };

    changeTheme = () => {
      const theme = this.state.theme === 'dark' ? 'light' : 'dark';
      this.setState({ theme });
      document.documentElement.setAttribute("data-theme", theme);
    }

    calculateScientific = (button) => {
      if(button !== "-ve") {
        var { result } = this.state;
        var res;
        try {
          // eslint-disable-next-line
          res = eval(result + button);
        } catch(e) {
          res = "ERROR";
        }
        this.setState({ result: res, display: res });
      } else {
        var { result, display } = this.state;
        if(/^\d+$/.test(result)) {
          result = -result;
          display = result;
        }
        this.setState({ result, display });
      }
    }

    calculateIntermediate = (button) => {
      try {
        // eslint-disable-next-line
        let result = eval(this.state.result);
          this.setState({
              result: result + button,
              display: result
          })
      } catch (e) {
          this.setState({
              result: "ERROR",
              display: "ERROR"
          })

      }
    }

    calculate = () => {
        if(this.state.result !== "0") {
          try {
            // eslint-disable-next-line
            const res = (eval(this.state.result) || "" ) + "";
              this.setState({
                  result: res,
                  display: res
              })
          } catch (e) {
              this.setState({
                  result: "ERROR",
                  display: "ERROR"
              })

          }
        }
    };

    reset = () => {
        this.setState({
            result: "0",
            display: "0"
        })
    };

    backspace = () => {
      let { result, display } = this.state;
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
      this.setState({
          result,
          display
      })
    };


  render() {
    return (
      <div className="main-container">
        <h1 className="heading">React Calculator</h1>
        <div className="calculator">
          <Result result={this.state.result} display={this.state.display} />
          <Keypad onClick={this.onClick} />
        </div>
        <Theme onClick={this.changeTheme} />
      </div>
    );
  }
}

export default App;
