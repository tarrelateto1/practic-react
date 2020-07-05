import React, { Component } from 'react';
import {Layout,Row,Col} from "antd"

//register image
import register1 from '../../../../assets/BrainBattle/register/register1.jpeg'

//code image
import code1 from '../../../../assets/BrainBattle/moneyCode/code1.jpeg'
import code2 from '../../../../assets/BrainBattle/moneyCode/code2.jpeg'
import code3 from '../../../../assets/BrainBattle/moneyCode/code3.jpeg'

//redeem image
import redeem1 from '../../../../assets/BrainBattle/redeem/redeem1.jpeg'
import redeem2 from '../../../../assets/BrainBattle/redeem/redeem2.jpeg'



const {Content}=Layout

export default class BrainBattle extends Component {
render(){
    return (
        <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360, margin: '24px 16px 0' }}>
            <Row justify="start" >
                <Col sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 6 }} xl={{ span: 6 }} >
                <h1>BrainBattle</h1>
                <p>วิธีในการถอนเงิน : Paypal</p>
                <p>คำอธิบายแอพริเคชั่น : เป็นการคิดเลขเก็บเงิน</p>
                    <p>รองรับโทรศัพท์ : ทั้ง Android และ IOS</p>
                {/*<p>รูปเรียงกัน </p>*/}
                {/*<h3>โค้ดรับเงิน</h3>*/}
                {/*<p>รูปเรียงกัน </p>*/}
                {/*<h3>วิธีแลกเงิน</h3>*/}
                {/*<p>รูปเรียงกัน </p>*/}
                </Col>
            </Row>
            <Row justify="center">
                <Col sm={{span: 12}} md={{span: 12}} lg={{span: 12}} xl={{span: 12}}>
                    <div className="ct">
                        <h2>วิธีการสมัครงาน</h2>
                    </div>
                </Col>
            </Row>
            <Row justify="center">
                <Col sm={{span: 12}} md={{span: 12}} lg={{span: 12}} xl={{span: 12}}>
                    <div className="ct">
                        <img src={register1} alt="register1"/>
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
            </Row>
        </div>
    </Content>
    )
}
}
