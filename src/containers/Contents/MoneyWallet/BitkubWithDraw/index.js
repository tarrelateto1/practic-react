import React, {Component} from 'react';
import {Col, Layout, Row} from "antd"
//bitkub images
import withdraw_paypal1 from '../../../../assets/Wallet/PaypalWithdraw/withdraw_paypal1.jpg'
import withdraw_paypal2 from '../../../../assets/Wallet/PaypalWithdraw/withdraw_paypal2.jpg'
import withdraw_paypal3 from '../../../../assets/Wallet/PaypalWithdraw/withdraw_paypal3.jpg'
import withdraw_paypal4 from '../../../../assets/Wallet/PaypalWithdraw/withdraw_paypal4.jpg'
import withdraw_paypal5 from '../../../../assets/Wallet/PaypalWithdraw/withdraw_paypal5.jpg'
import withdraw_paypal6 from '../../../../assets/Wallet/PaypalWithdraw/withdraw_paypal6.jpg'
import withdraw_paypal7 from '../../../../assets/Wallet/PaypalWithdraw/withdraw_paypal7.jpg'
import withdraw_paypal8 from '../../../../assets/Wallet/PaypalWithdraw/withdraw_paypal8.jpg'
import withdraw_paypal9 from '../../../../assets/Wallet/PaypalWithdraw/withdraw_paypal9.jpg'
import withdraw_paypal10 from '../../../../assets/Wallet/PaypalWithdraw/withdraw_paypal10.jpg'
import withdraw_paypal11 from '../../../../assets/Wallet/PaypalWithdraw/withdraw_paypal11.jpg'



const {Content}=Layout
export default class BitkubWithDraw extends Component {
    render() {
        return (
            <Content style={{margin: '24px 16px 0'}}>
                <div className="site-layout-background" style={{padding: 24, minHeight: 360, margin: '24px 16px 0'}}>
                    <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                        <h3>ในบทความนี้จะขอกล่าวถึงการถอนเงินออกจาก Paypal ไปยังบัญชีธนาคารไทยที่เราได้แนบเชื่อมโยงไว้กับบัญชี Paypal  ไว้เป็นที่เรียบร้อยแล้ว</h3>
                        <h3>สำหรับเวลาในการถอนนั้นแรกๆก็จะใช้เวลา 5-7 วัน แต่พอเราถอนมาได้สักพัก เพียงไม่นานต่อมาการถอนก็ใช้เวลา เพียงไม่เกิน 3 วัน และที่กล่าวมาทั้งหมดนั้นไม่รวมวันเสาร์กับวันอาทิตย์นะครับ</h3>
                        <h3><b>การถอน Paypal เข้าธนาคารไทยเสียค่าธรรมเนียมเท่าไหร่?</b></h3>
                        <h3>สำหรับค่าธรรมเนียมล่าสุด (5 กันยายน 2017) จะเป็นแบบเหมาจ่ายคือ หากยอดต่ำกว่า 5000 เสียครั้งล่ะ 50 บาทครับ</h3>
                        <h3>กรณีถอน 5000 บาท ขึ้นไปจะฟรีค่าธรรมเนียมครับ</h3>
                        <h3>สำหรับการถอนจาก Paypal ไปบัญชีธนาคารไทยต้องทำอย่างไรบ้าง ? มาดูรีวิวกันได้เลยครับ</h3>
                    </Col>
                    <Row justify="start">
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <h3><b>Reference</b></h3>
                            <ul>
                                <li>https://bitcoinaddict.org/2020/03/05/how-to-register-bitkub-com-and-kyc-guide/</li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Content>
        )
    }
}