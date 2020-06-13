import React, {Component} from 'react';
import {Layout, Menu} from 'antd';
import {TeamOutlined, UserOutlined,} from '@ant-design/icons';

const {Sider}=Layout;
const {SubMenu}=Menu;

class SiderComponent extends Component {
    render() {
        return (
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="logo"/>
                <Menu theme="dark"  mode="inline">
                    <SubMenu key="sub1" icon={<UserOutlined/>} title="งานเกม">
                        <Menu.Item key="1">Tom</Menu.Item>
                        <Menu.Item key="2">Bill</Menu.Item>
                        <Menu.Item key="3">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<UserOutlined/>} title="งานแบบสอบถาม">
                        <Menu.Item key="4">Tom</Menu.Item>
                        <Menu.Item key="5">Bill</Menu.Item>
                        <Menu.Item key="6">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" icon={<TeamOutlined/>} title="งานคลิป">
                        <Menu.Item key="7">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        )
    }
}

export default SiderComponent;