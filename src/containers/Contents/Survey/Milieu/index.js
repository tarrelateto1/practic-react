import React, {Component} from 'react';
import {Layout, Row, Col} from "antd"

//register image

import register1 from '../../../../assets/survey/milieu/register/register1.JPG'
import register2 from '../../../../assets/survey/milieu/register/register2.JPG'
import register3 from '../../../../assets/survey/milieu/register/register3.JPG'
import register4 from '../../../../assets/survey/milieu/register/register4.JPG'
import register5 from '../../../../assets/survey/milieu/register/register5.JPG'
import register6 from '../../../../assets/survey/milieu/register/register6.JPG'
import register7 from '../../../../assets/survey/milieu/register/register7.JPG'

//howto image
import howto1 from '../../../../assets/survey/milieu/howto/howto1.JPG'
import howto2 from '../../../../assets/survey/milieu/howto/howto2.JPG'
import howto3 from '../../../../assets/survey/milieu/howto/howto3.JPG'

//redeem image
import redeem1 from '../../../../assets/survey/milieu/redeem/redeem1.JPG'

//bug image
import bug1 from '../../../../assets/survey/milieu/bug/bug1.JPG'

const {Content}=Layout

export default class Milieu extends Component {
    render() {
        return (
            <Content style={{margin: '24px 16px 0'}}>
                <div className="site-layout-background" style={{padding: 24, minHeight: 360, margin: '24px 16px 0'}}>
                    <Row justify="start">
                        <Col sm={{span: 12}} md={{span: 12}} lg={{span: 6}} xl={{span: 6}}>
                            <h1>Milieu</h1>
                            <p>วิธีในการถอนเงิน : Paypal,true wallet</p>
                            <p>คำอธิบายแอพริเคชั่น : เป็นแอพริแคชั่นสำหรับทำแบบสอบถามทั่วไป</p>
                            <p>โหลดแอพ : ได้ทั้ง Playstore และ Appstore</p>
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
                                <h3>วิธีการสมัครงาน</h3>
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
                                                <img src={register1} alt="register1"/>
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
                                            <img src={register2} alt="register2"/>
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
                                            <img src={register3} alt="register3"/>
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
                                            <img src={register4} alt="register4"/>
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
                        <Col sm={{span: 12}} md={{span: 12}} lg={{span: 8}}
                            xl={{span: 8}}>
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
                        <Col
                            sm={{span: 12}}
                            md={{span: 12}}
                            lg={{span: 8}}
                            xl={{span: 8}}
                        >
                            <div className="bd-rad">
                                <Row justify="center">
                                    <Col span={2}>
                                        <h2>7</h2>
                                    </Col>
                                </Row>
                                <Row justify="center">
                                    <Col span={24}>
                                        <div className="ct">
                                            <img src={register7} alt="register7"/>
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
                    </Row>
                    <Row justify="center">
                        <Col
                            sm={{span: 12}}
                            md={{span: 12}}
                            lg={{span: 12}}
                            xl={{span: 12}}
                        >
                            <div className="ct">
                                <h3>วิธีแลกเงิน</h3>
                            </div>
                        </Col>
                    </Row>
                    <Row justify="center">
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
                                                <img src={redeem1} alt="redeem1"/>
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
                                <h3>หากเกิดปัญหาแบบนี้ ให้สมัครเมลใหม่นะคะ</h3>
                            </div>
                        </Col>
                    </Row>
                    <Row justify="center">
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
                                                <img src={bug1} alt="bug1"/>
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
