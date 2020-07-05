import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { TeamOutlined, UserOutlined, } from '@ant-design/icons';
import { Link } from "react-router-dom";

const { Sider } = Layout;
const { SubMenu } = Menu;

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
                <div className="logo" />
                <Menu theme="dark" mode="inline">
                    <SubMenu key="sub1" icon={<UserOutlined />} title="งานเกม">
                        <Menu.Item key="1">เกมคิดเลข
                            <Link to="/game/brain-battle" />
                        </Menu.Item>
                        <Menu.Item key="2">เกมฟาร์ม
                        <Link to="/game/coin-farm" />
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<UserOutlined />} title="งานแบบสอบถาม">
                        <Menu.Item key="3">Surveyon
                        <Link to="/survey/surveyon" />
                        </Menu.Item>
                        <Menu.Item key="4">milieu
                        <Link to="/survey/milieu" />
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" icon={<TeamOutlined />} title="งานคลิป">
                        <Menu.Item key="5">ClipClap
                        <Link to="/clip/clipclap"/>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" icon={<TeamOutlined />} title="กระเป๋าเงินออนไลน์">
                        <Menu.Item key="5">Paypal
                            <Link to="/wallet/paypal"/>
                        </Menu.Item>
                        <Menu.Item key="5">Bitkub
                            {/*<Link to="/clip/clipclap"/>*/}
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        )
    }
}

export default SiderComponent;