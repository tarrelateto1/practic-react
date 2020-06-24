import React, {Component} from 'react';
import {Layout, Row, Col} from "antd"

import './ClipClap.css'

//register images
import register1 from '../../../../assets/Clip/ClipClap/register/register1.jpeg'
import register2 from '../../../../assets/Clip/ClipClap/register/register2.jpeg'
import register3 from '../../../../assets/Clip/ClipClap/register/register3.jpeg'
import register4 from '../../../../assets/Clip/ClipClap/register/register4.jpeg'
import register5 from '../../../../assets/Clip/ClipClap/register/register5.jpeg'

//moneycode images
import code1 from '../../../../assets/Clip/ClipClap/moneyCode/code1.jpeg'
import code2 from '../../../../assets/Clip/ClipClap/moneyCode/code2.jpeg'
import code3 from '../../../../assets/Clip/ClipClap/moneyCode/code3.jpeg'
import code4 from '../../../../assets/Clip/ClipClap/moneyCode/code4.jpeg'
import code5 from '../../../../assets/Clip/ClipClap/moneyCode/code5.jpeg'

//redeem images
import redeem1 from '../../../../assets/Clip/ClipClap/redeem/redeem1.jpeg'
import redeem2 from '../../../../assets/Clip/ClipClap/redeem/redeem2.jpeg'
import redeem3 from '../../../../assets/Clip/ClipClap/redeem/redeem3.jpeg'

const {Content}=Layout
export default class ClipClap extends Component {
    render() {
        return (
            <Content style={{margin: '24px 16px 0'}}>
                <div className="site-layout-background" style={{padding: 24, minHeight: 360, margin: '24px 16px 0'}}>
                    <Row justify="start">
                        <Col sm={{span: 12}} md={{span: 12}} lg={{span: 12}} xl={{span: 12}}>
                            <h1>ClipClap</h1>
                            <p>วิธีในการถอนเงิน : Paypal</p>
                            <p>คำอธิบายแอพริเคชั่น : เป็นแอพดูคลิปตลกเพื่อรับเหรียญ</p>
                        </Col>
                    </Row>
                    <Row justify="start">
                        <Col sm={{span: 12}} md={{span: 12}} lg={{span: 12}} xl={{span: 12}}>
                            <p>ลิ้งโหลดแอพ :
                                <a href={"https://s.clipclaps.tv/i/5493582369"}
                                   target="_blank" rel="noopener noreferrer">
                                      &nbsp; คลิก</a>
                            </p>
                        </Col>
                    </Row>
                    <Row justify="center">
                        <Col sm={{span: 12}} md={{span: 12}} lg={{span: 12}} xl={{span: 12}}>
                            <div className="ct">
                                <h3>วิธีการสมัครงาน</h3>
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
                                            <img src={register1} alt="register1"/>
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
                                        <img src={register2} alt="register2"/>
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
                                        <img src={register3} alt="register3"/>
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
                                        <img src={register4} alt="register4"/>
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
                                        <img src={register5} alt="register5"/>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row justify="center">
                        <Col sm={{span: 12}} md={{span: 12}} lg={{span: 6}} xl={{span: 6}}>
                            <div className="ct">
                                <h2>โค้ดรับเงิน</h2>
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
                                        <img src={code1} alt="code1"/>
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
                                        <img src={code2} alt="code2"/>
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
                                        <img src={code3} alt="code3"/>
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
                                        <img src={code4} alt="code4"/>
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
                                        <img src={code5} alt="code5"/>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>

                    <Row justify="center">
                        <Col sm={{span: 12}} md={{span: 12}} lg={{span: 6}} xl={{span: 6}}>
                            <div className={"ct"}>
                                <h2>วิธีแลกเงิน</h2>
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
                                        <img src={redeem1} alt="redeem1"/>
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
                                        <img src={redeem2} alt="redeem2"/>
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
                                        <img src={redeem3} alt="redeem3"/>
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