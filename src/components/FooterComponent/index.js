import {Layout} from "antd";
import React, {Component} from "react";

const {Footer} = Layout;

export class FooterComponent extends Component{
    render() {
        return(
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        )
    }
}
export default FooterComponent