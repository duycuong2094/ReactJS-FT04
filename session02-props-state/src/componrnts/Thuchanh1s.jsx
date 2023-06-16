// import React, { Component } from 'react';

import React, { Component } from "react";

class Thuchanh1s extends Component {
  constructor() {
    super();
    //     this.state = {
    //       textInput: "",
    //     };
    //   }

    //   handleChangeInputValue = (event) => {
    //     this.setState({
    //       textInput: event.target.value,
    //     });
    //   };

    //   handleSubmitForm = (event) => {
    //     event.preventDefault();
    //     alert("Bạn vừa nhập: " + this.state.textInput);
    this.state={
      number:"",
      array:[],
      total:0,
    };
  }
    handChangeInputValue=(event)=>{
      this.setState({
        number:+event.target.value,
      });
    }
    handleSubmitForm=(event)=>{
      event.preventDefault();
      this.setState({
        array:[...this.state.array,this.state.number],
        total:this.state.total+this.state.number,
        number:"",
      })
    }

  render() {
    return (
      <div>
        {/* <form onSubmit={this.handleSubmitForm}>
          <input type="text" value={this.state.textInput} onChange={this.handleChangeInputValue} />
          <button type="submit">Gửi</button>
        </form> */}
        <form onSubmit={this.handleSubmitForm}>
          <input
            type="text"
            name=""
            id=""
            onChange={this.handChangeInputValue}
            value={this.state.number}
          />
          <button type="submit">Tính tổng</button>
        </form>
        <span>Kết quả</span>
        <div style={{ color: "red" }}>
          {this.state.array.join("+")+"="+this.state.total}
        </div>
      </div>
    );
  }
}

export default Thuchanh1s;
