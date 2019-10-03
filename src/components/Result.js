import React, {Component} from 'react';

class Result extends Component {
    render() {
        return (
            <div className="result-container">
                <input disabled className="result-text" value={this.props.display} />
            </div>
   		);
    }
}

export default Result;