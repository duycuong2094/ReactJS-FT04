import React, { Component } from 'react';

class ChilrentComp extends Component {
    // State:
    // State dùng để lưu trữ dữ liệu trong component đó=>có thể thay đổi được dữ liệu 
    // Để sử dụng được state cần khai báo lớp constructor
    // Và sử dụng super để gọi lớp
    // Để cập nhập lại state =>sử dung setSate
    constructor() {
        super()
        this.state = {
            studentA: "Nam Anh",
            question: "Có trốn hay không?",
            anwser: " Không",
            display: true,
        };
        // Khi sử dụng function thường cần chú ý định nghĩa từ khóa this
        this.handleChangeState=this.handleChangeState.bind(this);
    }
    // Sử dụng với arrow function
    // handleChangeState = () => {
    //     this.setState({
    //         anwser: "Cóoooo"
    //     })
    // }
    // Sử dụng với function thường;
    handleChangeState(){
        this.setState({
            anwser:"Có",
        })
    }
    handleToggleDisplay=()=>{
        this.setState({
            display:!this.state.display,
        })
    }
    render() {
        return (
            <div>
                {this.props.titleParent}-Khóa học :{this.props.course}
                <p>{this.props.children}</p>
                <h2>State</h2>
                <p>{this.state.studentA}</p>
                <p>{this.state.question}</p>
                <p>{this.state.anwser}</p>
                {/* Quy tắc đặt tên với các hàm xử lý 1 việc gì đó =>sẽ có tiền tố trước là handle 
                với các hàm xử lý 1 sự kiện giù đó => sẽ có tiền tố đó là on  */}
                <button onClick={this.handleChangeState}>Click!!!</button>
                {/*  */}
                {this.state.display ? (<div>
                    <p>Anh Bách cọp</p>
                    <p>Có</p>
                    <button onClick={this.handleToggleDisplay}>Click</button>
                </div>) : (<div>
                    <p>Anh Bách cọp</p>
                    <p>không</p>
                    <button onClick={this.handleToggleDisplay}>Click</button>
                </div>)}
            </div>
        );
    }
}

export default ChilrentComp;