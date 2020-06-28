import React, { Component } from 'react';
import {Layout,Row,Col} from "antd"


//register images
import register1 from '../../../../assets/survey/Surveyon/register/register1.jpeg'

//howTo images
import howto1 from '../../../../assets/survey/Surveyon/howto/howto1.jpg'
import howto2 from '../../../../assets/survey/Surveyon/howto/howto2.jpeg'

//redeem images
import redeem1 from '../../../../assets/survey/Surveyon/redeem/redeem1.jpeg'
import redeem2 from '../../../../assets/survey/Surveyon/redeem/redeem2.jpg'


const {Content}=Layout

export default class Surveyon extends Component {
    render(){
        return (
            <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360, margin: '24px 16px 0' }}>
                <Row justify="start" >
                    <Col sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} >
                    <h1>Surveyon</h1>
                    <p>วิธีในการถอนเงิน : Paypal</p>
                    <p>คำอธิบายแอพริเคชั่น : เป็นแอพริแคชั่นสำหรับทำแบบสอบถามทั่วไป</p>
                    <p>ลิ้งโหลดแอพ : โหลดได้ทั้ง Playstore และ Appstore</p>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col
                        sm={{ span: 12 }}
                        md={{ span: 12 }}
                        lg={{ span: 12 }}
                        xl={{ span: 12 }}
                    >
                        <div className="ct">
                            <h3>วิธีการสมัครงาน</h3>
                        </div>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col
                        sm={{ span: 12 }}
                        md={{ span: 12 }}
                        lg={{ span: 8 }}
                        xl={{ span: 8 }}
                    >
                        <div className="bd-rad">
                            <Row justify="center">
                                <Col span={2}>
                                    <h2>1</h2>
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Col span={24}>
                                    <div style={{ align: "center" }}>
                                        <div className="ct">
                                            <img src={register1} alt="register1" />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col
                        sm={{ span: 12 }}
                        md={{ span: 12 }}
                        lg={{ span: 12 }}
                        xl={{ span: 12 }}
                    >
                        <div className="ct">
                            <h3>โค้ดรับเงิน</h3>
                        </div>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col
                        sm={{ span: 12 }}
                        md={{ span: 12 }}
                        lg={{ span: 8 }}
                        xl={{ span: 8 }}
                    >
                        <div className="bd-rad">
                            <Row justify="center">
                                <Col span={2}>
                                    <h2>1</h2>
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Col span={24}>
                                    <div style={{ align: "center" }}>
                                        <div className="ct">
                                            <img src={howto1} alt="howto1" />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col
                        sm={{ span: 12 }}
                        md={{ span: 12 }}
                        lg={{ span: 8 }}
                        xl={{ span: 8 }}
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
                                        <img src={howto2} alt="howto2" />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>

                </Row>
                <Row justify="center">
                    <Col
                        sm={{ span: 12 }}
                        md={{ span: 12 }}
                        lg={{ span: 12 }}
                        xl={{ span: 12 }}
                    >
                        <div className="ct">
                            <h3>วิธีแลกเงิน</h3>
                        </div>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col
                        sm={{ span: 12 }}
                        md={{ span: 12 }}
                        lg={{ span: 8 }}
                        xl={{ span: 8 }}
                    >
                        <div className="bd-rad">
                            <Row justify="center">
                                <Col span={2}>
                                    <h2>1</h2>
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Col span={24}>
                                    <div style={{ align: "center" }}>
                                        <div className="ct">
                                            <img src={redeem1} alt="redeem1" />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col
                        sm={{ span: 12 }}
                        md={{ span: 12 }}
                        lg={{ span: 8 }}
                        xl={{ span: 8 }}
                    >
                        <div className="bd-rad">
                            <Row justify="center">
                                <Col span={2}>
                                    <h2>2</h2>
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Col span={24}>
                                    <div style={{ align: "center" }}>
                                        <div className="ct">
                                            <img src={redeem2} alt="redeem2" />
                                        </div>
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
    