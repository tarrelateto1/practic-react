import React, {Component} from "react";
import {Layout, Menu} from 'antd';
import {Link} from "react-router-dom";

const {Header}=Layout;

export class HeaderComponent extends Component {


    render() {
        return (
            <Header className="site-layout-sub-header-background" style={{padding: 0}}>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key={"1"}>
                        Home
                        <Link to="/"/>
                    </Menu.Item>
                    {/* <Menu.Item key="2">
                        Promotion
                        <Link to="/search"/>
                    </Menu.Item>
                    <Menu.Item key="3">
                        Profile
                        <Link to="/profile"/>
                    </Menu.Item> */}
                </Menu>
            </Header>
        )
    }
}

export default HeaderComponent;