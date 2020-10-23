import React, {Component} from 'react';
import {Col, Layout, Row} from "antd"
//bitkub images
import bitkub_withdraw1 from 'src/assets/Wallet/BitkubWithdraw/bitkub_withdraw1.jpg'
import bitkub_withdraw2 from 'src/assets/Wallet/BitkubWithdraw/bitkub_withdraw2.jpg'




const {Content}=Layout
export default class BitkubWithDraw extends Component {
    render() {
        return (
            <Content style={{margin: '24px 16px 0'}}>
                <div className="site-layout-background" style={{padding: 24, minHeight: 360, margin: '24px 16px 0'}}>
                    <Row justify="start">
                    <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                <h2>วิธีการถอนเงินบาท</h2>
                       <p>1. กรุณาลงชื่อเข้าใช้บัญชีของ Bitkub</p>
                            <p>2. คลิก เงินของฉัน</p>
                            <p>3. คลิก ถอน</p>
                    </Col>
                        </Row>
                    <Row justify="start">
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <img src={bitkub_withdraw1} alt="bitkub_withdraw1"/>
                        </Col>
                    </Row>
                    <Row justify="start">
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <p>4. เลือกบัญชีที่ท่านต้องการรับเงิน จากนั้นกรอกจำนวนเงินที่ต้องการจะถอน และกรอกรหัส 2FA (ถ้ามี) (หลังจากผ่านการยืนยันตัวตนและยืนยันบัญชีธนาคารสำเร็จแล้วเท่านั้น)</p>
                        <p>หมายเหตุ: จำนวนเงินสูงสุดที่ท่านสามารถถอนได้จะแสดงอยู่ที่ ยอดที่สามารถใช้ได้ (ภายใต้ข้อกำหนดของลิมิต)</p>
                        </Col>
                    </Row>
                    <Row justify="start">
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <img src={bitkub_withdraw2} alt="bitkub_withdraw2"/>
                        </Col>
                    </Row>
                    <Row justify="start">
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <p>5. ยืนยันการทำรายการโดย คลิกลิงก์ ที่เราส่งไปที่อีเมลของท่าน</p>
                            <p>6. ลิงก์การยืนยันขอถอนจะหมดอายุภายใน 24 ชม. หากท่านต้องการดำเนินการต่อ กรุณาทำรายการถอนใหม่อีกครั้ง เเละกดลิงก์ยืนยันภายใน 24 ชม.</p>
                        </Col>
                    </Row>
                    <Row justify="start">
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <h3><b>Reference</b></h3>
                            <ul>
                                <li>https://support.bitkub.com/</li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Content>
        )
    }
}