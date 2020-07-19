import React, {Component} from 'react';
import {Col, Layout, Row} from "antd"
import {Link} from "react-router-dom";
//register images
import register1 from "../../../../assets/BitCoin/Btcclick/register/btcclick_register1.jpg";
import register2 from "../../../../assets/BitCoin/Btcclick/register/btcclick_register2.jpg";
import register3 from "../../../../assets/BitCoin/Btcclick/register/btcclick_register3.jpg";
import register4 from "../../../../assets/BitCoin/Btcclick/register/btcclick_register4.jpg";
import register5 from "../../../../assets/BitCoin/Btcclick/register/btcclick_register5.jpg";
import register6 from "../../../../assets/BitCoin/Btcclick/register/btcclick_register6.jpg";

//howto images
import howto1 from "../../../../assets/BitCoin/Btcclick/Howto/btcclick_howto1.jpg";
import howto2 from "../../../../assets/BitCoin/Btcclick/Howto/btcclick_howto2.jpg";
import howto3 from "../../../../assets/BitCoin/Btcclick/Howto/btcclick_howto3.jpg";
import howto4 from "../../../../assets/BitCoin/Btcclick/Howto/btcclick_howto4.jpg";

//Withdraw images
import withdraw1 from "../../../../assets/BitCoin/Btcclick/Withdraw/btcclick_withdraw1.jpg";
import withdraw2 from "../../../../assets/BitCoin/Btcclick/Withdraw/btcclick_withdraw2.png";
import withdraw3 from "../../../../assets/BitCoin/Btcclick/Withdraw/btcclick_withdraw3.png";

const {Content}=Layout
export default class BtcClick extends Component {
    render() {
        return (
            <Content style={{margin: '24px 16px 0'}}>
                <div className="site-layout-background" style={{padding: 24, minHeight: 360, margin: '24px 16px 0'}}>
                    <Row justify="center">
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <h1>BtcClick</h1>
                            <p>วิธีในการถอนเงิน : <Link to="/wallet/bitkub">BitCoin(สมัคร)</Link> | <Link to="/wallet/bitkub-withdraw">BitCoin(ถอน)</Link> </p>
                            <p>คำอธิบายเว็ปไซต์ : เป็นเว็ปสำหรับสุ่มบิตคอยน์</p>
                            <p>ลิ้งสมัครเว็ป :
                                <a href={"https://btcclicks.com/?r=2771fed6\n"}
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
                        <Col sm={{span: 12}} md={{span: 12}} lg={{span: 8}} xl={{span: 8}}>
                            <div className="bd-rad">
                                <Row justify="center">
                                    <Col span={2}>
                                        <h2>4</h2>
                                    </Col>
                                </Row>
                                <Row justify="center">
                                    <Col span={24}>
                                        <div className="ct">
                                            <img src={register4} alt="register4"/>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col sm={{span: 12}} md={{span: 12}} lg={{span: 8}} xl={{span: 8}}>
                            <div className="bd-rad">
                                <Row justify="center">
                                    <Col span={2}>
                                        <h2>5</h2>
                                    </Col>
                                </Row>
                                <Row justify="center">
                                    <Col span={24}>
                                        <div className="ct">
                                            <img src={register5} alt="register5"/>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col sm={{span: 12}} md={{span: 12}} lg={{span: 8}} xl={{span: 8}}>
                            <div className="bd-rad">
                                <Row justify="center">
                                    <Col span={2}>
                                        <h2>6</h2>
                                    </Col>
                                </Row>
                                <Row justify="center">
                                    <Col span={24}>
                                        <div className="ct">
                                            <img src={register6} alt="register6"/>
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
                        <Col sm={{span: 12}} md={{span: 12}} lg={{span: 8}} xl={{span: 8}}>
                            <div className="bd-rad">
                                <Row justify="center">
                                    <Col span={2}>
                                        <h2>4</h2>
                                    </Col>
                                </Row>
                                <Row justify="center">
                                    <Col span={24}>
                                        <div className="ct">
                                            <img src={howto4} alt="howto4"/>
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
                                            <img src={withdraw3} alt="withdraw3"/>
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