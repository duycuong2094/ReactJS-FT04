import React, { Component } from 'react';
import Timer from './Timer';
import Button from './Button';

class Clock extends Component {
    constructor() {
        super();
        this.state = {
          time: 0,
          isRunning: true,
        };
      }
    
      // Viết 3 hàm: handleStart, handleStop, handleReset
      handleStart = () => {
        setInterval(() => {
          this.setState((prevState) => ({
            time: prevState.time + 1,
          }));
        }, 1000);
      };
    
    render() {
        const{time}=this.state
        return (
            <div>
            <Timer time={time}></Timer>
            <Button></Button>
            </div>
        );
    }
}

export default Clock;