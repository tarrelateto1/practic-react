import React, {Component} from 'react';
import {Layout, Row, Col} from "antd"

import './ClipClap.css'

//images
import register1 from '../../../../assets/Clip/ClipClap/register/register1.jpeg'
import register2 from '../../../../assets/Clip/ClipClap/register/register2.jpeg'
import register3 from '../../../../assets/Clip/ClipClap/register/register3.jpeg'


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
                            <p>ลิ้งโหลดแอพ : http</p>
                            <h3>วิธีการสมัครงาน</h3>
                        </Col>
                    </Row>
                    <Row justify="start">
                        <Col sm={{span: 12}} md={{span: 12}} lg={{span: 8}} xl={{span: 8}}>
                            <img src={register1}  alt="register1"/>
                            {/*<p>รูปเรียงกัน </p>*/}
                        </Col>
                        <Col sm={{span: 12}} md={{span: 12}} lg={{span: 8}} xl={{span: 8}}>
                            <img src={register2}  alt="register2"/>
                            {/*<p>รูปเรียงกัน </p>*/}
                        </Col>
                        <Col sm={{span: 12}} md={{span: 12}} lg={{span: 8}} xl={{span: 8}}>
                            <img src={register3}  alt="register3"/>
                            {/*<p>รูปเรียงกัน </p>*/}
                        </Col>
                    </Row>
                    <Row justify="start">
                        <Col sm={{span: 12}} md={{span: 12}} lg={{span: 6}} xl={{span: 6}}>
                            <h3>โค้ดรับเงิน</h3>
                            <p>รูปเรียงกัน </p>
                            <h3>วิธีแลกเงิน</h3>
                            <p>รูปเรียงกัน </p>
                        </Col>
                    </Row>
                </div>
            </Content>
        )
    }
}