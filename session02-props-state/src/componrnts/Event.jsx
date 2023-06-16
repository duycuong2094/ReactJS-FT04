import React, { Component } from 'react';

 class Event extends Component {
    // Sự kiện với arrow function
    handleClick01=()=>{
        console.log("Click 01");
    };
    handleClick02=()=>{
        console.log("Click 02");
    };
    handleClick03=()=>{
        console.log("Click 03");
    };
    handleClick04=(element)=>{
        console.log(element);
    };
    render() {
        return (
            <div>
                <button onClick={this.handleClick01}>Click1</button>
                <button onClick={this.handleClick02()}>Click2</button>
                <button onClick={()=>this.handleClick03}>Click3</button>
                <button onClick={()=>this.handleClick04("Hello word")}>Click4</button>
            </div>
        );
    }
}

export default Event;