import React, {Component} from 'react';
import { toggleScientific } from '../actions/index';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Button from './Button.js';

class KeyPadComponent extends Component {

    handleClick = () => {
        this.props.toggleScientific(!this.props.scientific);
    }

    showScientificButtons = () => {
        if(this.props.scientific) {
            return (
                <div className="button-flex animation">
                    <Button name="**2" btnText="sqr" onClick={e => this.props.onClick(e.target.name)} />
                    <Button name="-ve" btnText="-x" onClick={e => this.props.onClick(e.target.name)} />
                    <Button name="**0.5" btnText="&radic;" onClick={e => this.props.onClick(e.target.name)} />
                </div>
            );
        } else {
            return null;
        }
    }

    render() {
        return (
            <div className="keypad-container">
                <div className="button-flex">
                    <Button classname="orange-btn" name="C" onClick={e => this.props.onClick(e.target.name)} />
                    <Button name={this.props.scientific ? "CLOSE" : "SCI"} onClick={this.handleClick} />
                    <Button classname="orange-text" name="CE" onClick={e => this.props.onClick(e.target.name)} />
                </div>
                <div className="button-flex">
                    <Button name="7" onClick={e => this.props.onClick(e.target.name)} />
                    <Button name="8" onClick={e => this.props.onClick(e.target.name)} />
                    <Button name="9" onClick={e => this.props.onClick(e.target.name)} />
                    <Button name="/" onClick={e => this.props.onClick(e.target.name)} btnText="÷" />
                </div>
                <div className="button-flex">
                    <Button name="4" onClick={e => this.props.onClick(e.target.name)} />
                    <Button name="5" onClick={e => this.props.onClick(e.target.name)} />
                    <Button name="6" onClick={e => this.props.onClick(e.target.name)} />
                    <Button name="*" onClick={e => this.props.onClick(e.target.name)} />
                </div>
                <div className="button-flex">
                    <Button name="1" onClick={e => this.props.onClick(e.target.name)} />
                    <Button name="2" onClick={e => this.props.onClick(e.target.name)} />
                    <Button name="3" onClick={e => this.props.onClick(e.target.name)} />
                    <Button name="-" onClick={e => this.props.onClick(e.target.name)} />
                </div>
                <div className="button-flex">
                    <Button classname="orange-btn" name="=" onClick={e => this.props.onClick(e.target.name)} />
                    <Button name="0" onClick={e => this.props.onClick(e.target.name)} />
                    <Button name="." onClick={e => this.props.onClick(e.target.name)} />
                    <Button name="+" onClick={e => this.props.onClick(e.target.name)} />
                </div>
                { this.showScientificButtons() }
            </div>
        );
    }
}

function mapStateToProps (state) {
  return { 
    scientific: state.scientific.mode
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      toggleScientific: toggleScientific
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(KeyPadComponent);