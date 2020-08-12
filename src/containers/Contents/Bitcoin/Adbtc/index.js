import React, {Component} from 'react';
import {Col, Layout, Row} from "antd"
import {Link} from "react-router-dom";
//register images
import register1 from "../../../../assets/BitCoin/Adbtc/register/register1.jpg";
import register2 from "../../../../assets/BitCoin/Adbtc/register/register2.jpg";


//howto images
import howto1 from "../../../../assets/BitCoin/Adbtc/howto/howto1.jpg";
import howto2 from "../../../../assets/BitCoin/Adbtc/howto/howto2.jpg";

//Withdraw images
import withdraw1 from "../../../../assets/BitCoin/Adbtc/withdraw/withdraw.jpg";

import './index.css'
const {Content}=Layout
export default class Adbtc extends Component {
    render() {
        return (
            <Content style={{margin: '24px 16px 0'}}>
                <div className="site-layout-background" style={{padding: 24, minHeight: 360, margin: '24px 16px 0'}}>
                    <Row justify="center">
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <h1>Adbtc</h1>
                            <p>วิธีในการถอนเงิน : <Link to="/wallet/bitkub">BitCoin(สมัคร)</Link> | <Link to="/wallet/bitkub-withdraw">BitCoin(ถอน)</Link> </p>
                            <p>คำอธิบายเว็ปไซต์ : เป็นเว็ปสำหรับเก็บบิทคอยน์ แค่ดูโฆษณา</p>
                            <p>ลิ้งสมัครเว็ป :
                                <a href={"https://r.adbtc.top/724939"}
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
                    </Row>
                    <Row justify="center">
                        <Col sm={{span: 12}} md={{span: 12}} lg={{span: 12}} xl={{span: 12}}>
                            <div className="ct">
                                <h3>ตามขั้นตอนด้านล่างได้เลย</h3>
                            </div>
                        </Col>
                    </Row>
                    <Row justify="center">
                        <Col sm={{span: 20}} md={{span: 20}} lg={{span: 20}} xl={{span: 20}}>
                            <div className="ct col-iframe">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/16cNF71X024"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title="video"
                                ></iframe>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Content>
        )
    }
}