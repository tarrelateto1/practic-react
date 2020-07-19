import React, {Component} from 'react';
import {Layout, Menu} from 'antd';
import {DollarCircleOutlined, ReconciliationOutlined, UserOutlined,BoldOutlined,PlaySquareOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";

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
                    <SubMenu key="sub2" icon={<ReconciliationOutlined />} title="งานแบบสอบถาม">
                        <Menu.Item key="3">Surveyon
                        <Link to="/survey/surveyon" />
                        </Menu.Item>
                        <Menu.Item key="4">milieu
                        <Link to="/survey/milieu" />
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" icon={<PlaySquareOutlined />} title="งานคลิป">
                        <Menu.Item key="5">ClipClap
                        <Link to="/clip/clipclap"/>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" icon={<BoldOutlined />} title="งานบิทคอยน์">
                        <Menu.Item key="6">FreeBitco
                            <Link to="/bitcoin/freebitco"/>
                        </Menu.Item>
                    </SubMenu>
                    {/*<SubMenu key="sub5" icon={<TeamOutlined />} title="กระเป๋าเงินออนไลน์">*/}
                    {/*    <Menu.Item key="7">Paypal*/}
                    {/*        <Link to="/wallet/paypal"/>*/}
                    {/*    </Menu.Item>*/}
                    {/*    <Menu.Item key="8">Bitkub*/}
                    {/*        <Link to="/wallet/bitkub"/>*/}
                    {/*    </Menu.Item>*/}
                    {/*</SubMenu>*/}
                    <SubMenu key="sub5" title={
                        <span><DollarCircleOutlined /><span>กระเป๋าเงินออนไลน์</span></span>}>
                        <Menu.ItemGroup key="g1" title="Paypal">
                            <Menu.Item key="ึ7">สมัคร        <Link to="/wallet/paypal"/></Menu.Item>
                            <Menu.Item key="8">ถอน<Link to="/wallet/paypal-withdraw"/></Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup key="g2" title="bitkub">
                            <Menu.Item key="9">สมัคร<Link to="/wallet/bitkub"/></Menu.Item>
                            <Menu.Item key="10">ถอน <Link to="/wallet/bitkub-withdraw"/></Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>

                    {/*<SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">*/}
                    {/*    <Menu.Item key="5">Option 5</Menu.Item>*/}
                    {/*    <Menu.Item key="6">Option 6</Menu.Item>*/}
                    {/*    <SubMenu key="sub3" title="Submenu">*/}
                    {/*        <Menu.Item key="7">Option 7</Menu.Item>*/}
                    {/*        <Menu.Item key="8">Option 8</Menu.Item>*/}
                    {/*    </SubMenu>*/}
                    {/*</SubMenu>*/}
                </Menu>


            </Sider>
        )
    }
}

export default SiderComponent;