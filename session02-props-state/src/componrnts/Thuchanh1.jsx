import React, { Component } from 'react';
import Thuchanh1s from './Thuchanh1s';

class Thuchanh1 extends Component {
    render() {
        return (
            <div>
                <Thuchanh1s
                > 
                    {this.props.text}
                </Thuchanh1s>
            </div>
        );
    }
}

export default Thuchanh1;