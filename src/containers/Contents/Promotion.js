import React, {Component} from "react";
import {Layout} from "antd";

const {Content} = Layout

class Promotion extends Component {
    render() {
        return (
            <Content style={{ margin: '24px 16px 0' }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    Event
                </div>
            </Content>
        );
    }
}
export default Promotion