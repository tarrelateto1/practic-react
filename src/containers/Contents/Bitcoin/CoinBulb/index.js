import React, {Component} from 'react';
import {Col, Layout, Row} from "antd"
import {Link} from "react-router-dom";
//register images
import register1 from "src/assets/BitCoin/CoinBulb/register/register1.jpg";
import register2 from "src/assets/BitCoin/CoinBulb/register/register2.jpg";
import register3 from "src/assets/BitCoin/CoinBulb/register/register3.png";


//howto images
import howto1 from "src/assets/BitCoin/CoinBulb/howto/howto1.jpg";
import howto2 from "src/assets/BitCoin/CoinBulb/howto/howto2.jpg";
import howto3 from "src/assets/BitCoin/CoinBulb/howto/howto3.jpg";

//Withdraw images
import withdraw1 from "src/assets/BitCoin/CoinBulb/withdraw/withdraw1.jpg";
import withdraw2 from "src/assets/BitCoin/CoinBulb/withdraw/withdraw2.jpg";


const {Content}=Layout
export default class CoinBulb extends Component {
    render() {
        return (
            <Content style={{margin: '24px 16px 0'}}>
                <div className="site-layout-background" style={{padding: 24, minHeight: 360, margin: '24px 16px 0'}}>
                    <Row justify="center">
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <h1>CoinBulb</h1>
                            <p>วิธีในการถอนเงิน : <Link to="/wallet/bitkub">BitCoin(สมัคร)</Link> | <Link to="/wallet/bitkub-withdraw">BitCoin(ถอน)</Link> </p>
                            <p>คำอธิบายเว็ปไซต์ :  เป็นเว็ปรับบิทคอยน์ เพียงแค่ดูโฆษณา</p>
                            <p>ลิ้งสมัครเว็ป :
                                <a href={"https://www.coinbulb.com/?r=45262196034fae7222f43b73bc9de0e7"}
                                   target="_blank" rel="noopener noreferrer">
                                    &nbsp; คลิก</a>
                            </p>
                        </Col>
                    </Row>

                    <Row justify="center">
                        <Col sm={{span: 12}} md={{span: 12}} lg={{span: 12}} xl={{span: 12}}>
                            <div className="ct">
                                <h3>วิธีสมัคร</h3>
                            </div>
                        </Col>
                    </Row>
                    <Row justify="start">
                        <Col sm={{span: 12}} md={{span: 12}} lg={{span: 8}} xl={{span: 8}}>
                            <div className="bd-rad">
                                <Row justify="center">
                                    <Col span={2}>
                                        <h2>1</h2>
                                    </Col>
                                </Row>
                                <Row justify="center">
                                    <Col span={24}>
                                        <div style={{align: "center"}}>
                                            <div className="ct">
                                                <img src={register1} alt="register1"/>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col sm={{span: 12}} md={{span: 12}} lg={{span: 8}} xl={{span: 8}}>
                            <div className="bd-rad">
                                <Row justify="center">
                                    <Col span={2}>
                                        <h2>2</h2>
                                    </Col>
                                </Row>
                                <Row justify="center">
                                    <Col span={24}>
                                        <div className="ct">
                                            <img src={register2} alt="register2"/>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col sm={{span: 12}} md={{span: 12}} lg={{span: 8}} xl={{span: 8}}>
                            <div className="bd-rad">
                                <Row justify="center">
                                    <Col span={2}>
                                        <h2>3</h2>
                                    </Col>
                                </Row>
                                <Row justify="center">
                                    <Col span={24}>
                                        <div className="ct">
                                            <img src={register3} alt="register3"/>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row justify="center">
                        <Col sm={{span: 12}} md={{span: 12}} lg={{span: 12}} xl={{span: 12}}>
                            <div className="ct">
                                <h3>วิธีทำงาน</h3>
                            </div>
                        </Col>
                    </Row>
                    <Row justify="center">
                        <Col sm={{span: 12}} md={{span: 12}} lg={{span: 8}} xl={{span: 8}}>
                            <div className="bd-rad">
                                <Row justify="center">
                                    <Col span={2}>
                                        <h2>1</h2>
                                    </Col>
                                </Row>
                                <Row justify="center">
                                    <Col span={24}>
                                        <div style={{align: "center"}}>
                                            <div className="ct">
                                                <img src={howto1} alt="howto1"/>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col sm={{span: 12}} md={{span: 12}} lg={{span: 8}} xl={{span: 8}}>
                            <div className="bd-rad">
                                <Row justify="center">
                                    <Col span={2}>
                                        <h2>2</h2>
                                    </Col>
                                </Row>
                                <Row justify="center">
                                    <Col span={24}>
                                        <div className="ct">
                                            <img src={howto2} alt="howto2"/>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col sm={{span: 12}} md={{span: 12}} lg={{span: 8}} xl={{span: 8}}>
                            <div className="bd-rad">
                                <Row justify="center">
                                    <Col span={2}>
                                        <h2>3</h2>
                                    </Col>
                                </Row>
                                <Row justify="center">
                                    <Col span={24}>
                                        <div className="ct">
                                            <img src={howto3} alt="howto3"/>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row justify="center">
                        <Col sm={{span: 12}} md={{span: 12}} lg={{span: 12}} xl={{span: 12}}>
                            <div className="ct">
                                <h3>วิธีถอนเงิน</h3>
                            </div>
                        </Col>
                    </Row>
                    <Row justify="center">
                        <Col sm={{span: 12}} md={{span: 12}} lg={{span: 8}} xl={{span: 8}}>
                            <div className="bd-rad">
                                <Row justify="center">
                                    <Col span={2}>
                                        <h2>1</h2>
                                    </Col>
                                </Row>
                                <Row justify="center">
                                    <Col span={24}>
                                        <div style={{align: "center"}}>
                                            <div className="ct">
                                                <img src={withdraw1} alt="withdraw1"/>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col sm={{span: 12}} md={{span: 12}} lg={{span: 8}} xl={{span: 8}}>
                            <div className="bd-rad">
                                <Row justify="center">
                                    <Col span={2}>
                                        <h2>2</h2>
                                    </Col>
                                </Row>
                                <Row justify="center">
                                    <Col span={24}>
                                        <div className="ct">
                                            <img src={withdraw2} alt="withdraw2"/>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Content>
        )
    }
}