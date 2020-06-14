import React, { Component } from 'react';
import {Layout,Row,Col} from "antd"

const {Content}=Layout

export default class Surveyon extends Component {
    render(){
        return (
            <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360, margin: '24px 16px 0' }}>
                <Row justify="start" >
                    <Col sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 6 }} xl={{ span: 6 }} >
                    <h1>Surveyon</h1>
                    <p>วิธีในการถอนเงิน : Paypal</p>
                    <p>คำอธิบายแอพริเคชั่น : เป็นแอพดูคลิปตลกเพื่อรับเหรียย</p>
                    <p>ลิ้งโหลดแอพ : http</p>
                    <h3>วิธีการสมัครงาน</h3>
                    <p>รูปเรียงกัน </p>
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
    