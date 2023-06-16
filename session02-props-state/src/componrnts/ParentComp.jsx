import React, { Component } from 'react';
import ChilrentComp from './ChilrentComp';
 {/* Props:
                Props là viết tắt của properties
                Props dùng để lưu trữ các attribute
                props dùng để giao tiếp giữa các component với nhau (ví dụ : từ cha xuống con) */}
class ParentComp extends Component {
    render() {
        const title ="Rikkei Academy"
        return (
            <div>
              <h2>  <ChilrentComp titleParent={title} course={"React"} > Time : 15 buổi</ChilrentComp></h2>
            </div>
        );
    }
}

export default ParentComp;