import React, {Component} from 'react';
import {Col, Layout, Row} from "antd"
//register images
import register1 from '../../../../assets/BitCoin/FreeBitco/register/register1.jpeg'
import howto1 from "../../../../assets/BitCoin/FreeBitco/Howto/howto1.jpeg";
import howto2 from "../../../../assets/BitCoin/FreeBitco/Howto/howto2.jpeg";
import howto3 from "../../../../assets/BitCoin/FreeBitco/Howto/howto3.jpeg";
import howto4 from "../../../../assets/BitCoin/FreeBitco/Howto/howto4.jpeg";


const {Content}=Layout
export default class FreeBitco extends Component {
    render() {
        return (
            <Content style={{margin: '24px 16px 0'}}>
                <div className="site-layout-background" style={{padding: 24, minHeight: 360, margin: '24px 16px 0'}}>
                    <Row justify="start">
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <h1>FreeBitCo</h1>
                            <p>วิธีในการถอนเงิน : BitCoin</p>
                            <p>คำอธิบายเว็ปไซต์ : เป็นเว็ปสำหรับสุ่มบิตคอยน์</p>
                            <p>ลิ้งสมัครเว็ป :
                                <a href={"https://freebitco.in/?r=12028945\n"}
                                   target="_blank" rel="noopener noreferrer">
                                    &nbsp; คลิก</a>
                            </p>
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
                    </Row>
                    <Row justify="center">
                        <Col
                            sm={{span: 12}}
                            md={{span: 12}}
                            lg={{span: 12}}
                            xl={{span: 12}}
                        >
                            <div className="ct">
                                <h3>วิธีการทำงาน</h3>
                            </div>
                        </Col>
                    </Row>
                    <Row justify="start">
                        <Col
                            sm={{span: 12}}
                            md={{span: 12}}
                            lg={{span: 8}}
                            xl={{span: 8}}
                        >
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
                        <Col
                            sm={{span: 12}}
                            md={{span: 12}}
                            lg={{span: 8}}
                            xl={{span: 8}}
                        >
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
                        <Col
                            sm={{span: 12}}
                            md={{span: 12}}
                            lg={{span: 8}}
                            xl={{span: 8}}
                        >
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
                        <Col
                            sm={{span: 12}}
                            md={{span: 12}}
                            lg={{span: 8}}
                            xl={{span: 8}}
                        >
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
                </div>
            </Content>
        )
    }
}