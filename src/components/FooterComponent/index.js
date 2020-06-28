import {Layout} from "antd";
import React, {Component} from "react";

const {Footer} = Layout;

export class FooterComponent extends Component{
    render() {
        return(
            <Footer style={{ textAlign: 'center' }}>Work Online ©2020 Created by Mr.Gold</Footer>
        )
    }
}
export default FooterComponent