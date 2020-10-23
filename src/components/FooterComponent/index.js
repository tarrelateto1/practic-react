import {Layout} from "antd";
import React, {Component} from "react";

const {Footer} = Layout;

export class FooterComponent extends Component{
    render() {
        return(
            <Footer style={{ textAlign: 'center' }}>Work Online ©2020 Created by Mr.Gold Link: <a href='https://termine-10e44.web.app/'>https://termine-10e44.web.app/</a></a></Footer>
        )
    }
}
export default FooterComponent