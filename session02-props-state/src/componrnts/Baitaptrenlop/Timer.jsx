import React, { Component } from 'react';

class Timer extends Component {
    render() {
        return (
            <div>
                <div>Time:{this.props.time}</div>
            </div>
        );
    }
}

export default Timer;