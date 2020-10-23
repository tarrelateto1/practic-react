import React, {Component} from 'react';
import {Col, Layout, Row} from "antd"
//paypal images
import paypal1 from 'src/assets/Wallet/Paypal/paypal1.jpg'
import paypal2 from 'src/assets/Wallet/Paypal/paypal2.jpg'
import paypal3 from 'src/assets/Wallet/Paypal/paypal3.jpg'
import paypal4 from 'src/assets/Wallet/Paypal/paypal4.jpg'
import paypal5 from 'src/assets/Wallet/Paypal/paypal5.jpg'
import paypal6 from 'src/assets/Wallet/Paypal/paypal6.jpg'
import paypal7 from 'src/assets/Wallet/Paypal/paypal7.jpg'
import paypal8 from 'src/assets/Wallet/Paypal/paypal8.jpg'
import paypal9 from 'src/assets/Wallet/Paypal/paypal9.jpg'
import paypal10 from 'src/assets/Wallet/Paypal/paypal10.jpg'
import paypal11 from 'src/assets/Wallet/Paypal/paypal11.jpg'
import paypal12 from 'src/assets/Wallet/Paypal/paypal12.jpg'



const {Content}=Layout
export default class Paypal extends Component {
    render() {
        return (
            <Content style={{margin: '24px 16px 0'}}>
                <div className="site-layout-background" style={{padding: 24, minHeight: 360, margin: '24px 16px 0'}}>
                    <Row justify="start">
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <h1>Paypal</h1>
                            <p>คือ E-currency ชนิดหนึ่งที่ใช้ในการซื้อขาย ชำระค่าสินค้า หรือค่าบริการต่างๆทั่วโลก ฯล
                                จึงเป็นอีกทางเลือกหนึ่ง ที่เรามารถทำธุรกรรมฝาก-ถอน
                                เงินออนไลท์ซึ่งมีวิธีการสมัคร ที่ง่ายๆไม่มีอะไรยุ่งยากดังนี้</p>
                            <p>ไปที่เว็บไซต์<a href={"https://www.paypal.com/th/home"} target="_blank"
                                               rel="noopener noreferrer">
                                &nbsp; Paypal
                            </a> แล้วคลิกสมัครสมาชิก</p>
                        </Col>
                    </Row>
                    <Row justify="start">
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <img src={paypal1} alt="paypal1" />
                        </Col>
                    </Row>
                    <Row justify="start">
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <p> <b>คลิกเริ่มใช้งาน</b> (เลือกที่ฝั่งซื้อสินค้าด้ย Paypal)</p>
                        </Col>
                    </Row>
                    <Row justify="start">
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <img src={paypal2} alt="paypal2" />
                        </Col>
                    </Row>
                    <Row justify="start">
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <h3><b>เข้าสู่หน้าการสมัคร</b></h3>
                            <p> ให้กรอกอีเมล >> ตั้งรหัสผ่าน >>กรอกรหัสผ่านที่ตั้งยืนยันอีกครั้ง >> แล้ว คลิกดำเนินการต่อ </p>
                        </Col>
                    </Row>
                    <Row justify="start">
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <img src={paypal3} alt="paypal3" />
                        </Col>
                    </Row>
                    <Row justify="start">
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <h3><b>ระบบจะรันมาสู่หน้าให้กรอกข้อมูลส่วนตัว</b></h3>
                            <p>ประกอบด้วย ชื่อ นามสกุล จริงตามบัตรประชาชน >> วันเดือนปีเกิด >> ที่อยู่ >> เบอร์โทร ให้กรอกข้อมูลต่างๆให้ครบถ้วนตามตัวอย่างแล้วคลิก ยอมรับและเปิดบัญชี</p>
                        </Col>
                    </Row>
                    <Row justify="start">
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <img src={paypal4} alt="paypal4" />
                        </Col>
                    </Row>
                    <Row justify="start">
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <h3><b>ระบบจะรันมาสู่หน้าให้เชื่อมโยงบัตร</b></h3>
                            <p>เป็นบัตรเครดิตหรือเดบิตก็ได้ กรณียังไม่พร้อมให้คลิก จะดำเนินการภายหลัง</p>
                        </Col>
                    </Row>
                    <Row justify="start">
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <img src={paypal5} alt="paypal5" />
                        </Col>
                    </Row>
                    <Row justify="start">
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <h3><b>กรณีเลือกจะดำเนินการภายหลัง</b></h3>
                            <p>ระบบจะทวนถามอีกรอบ ก็ให้ยืนยัน (ยังอยากจะดำเนินอีกภายหลัง)</p>
                        </Col>
                    </Row>
                    <Row justify="start">
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <img src={paypal6} alt="paypal6" />
                        </Col>
                    </Row>
                    <Row justify="start">
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <h3>ให้ทำการยืนยันอีเมล </h3>
                            <p>หลังจากคลิก ”ยังอยากจะดำเนินการภายหลัง” ระบบจะรันมาสู่หน้าอธิบายเกี่ยวกับ paypal ว่าทำอะไรได้บ้าง</p>
                            <p>จากนั้นให้เราไปเช็คอีเมลเพื่อให้ทำการยืนยัน</p>
                        </Col>
                    </Row>
                    <Row justify="start">
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <img src={paypal7} alt="paypal7" />
                        </Col>
                    </Row>
                    <Row justify="start">
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <p>แล้วกรอกรหัสผ่านเพื่อยืนยันอีเมล</p>
                        </Col>
                    </Row>
                    <Row justify="start">
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <img src={paypal8} alt="paypal8" />
                        </Col>
                    </Row>
                    <Row justify="start">
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <p style={{color:"red"}}>หมายเหตุ: ในบทความทางผู้เขียนทำการยืนยันอีเมลผ่านมือถือ  รูปแบบอาจจะแตกต่างกันกับท่านที่ใช้คอมพิวเตอร์ แนะนำให้ดูจากคลิปตัวอย่างด้านล่างนะครับ</p>
                            <h3><b>การสมัครเปิดบัญชี และยืนยันที่อยู่สำเร็จ</b></h3>
                            <p>เมื่อเราคลิกยืนยันอีเมล และใส่รหัสผ่่าน ถูกระบบก็จะรันมาสู่หน้าว่าการสมัครสำเร็จแล้ว แต่ ยังเหลือการเชื่อมต่อไปยังบัญชีธนาคารหรือบัตรเดบิต/เครดิต (กรณีที่เลือกจะเชื่อมโยงภาย)</p>
                        </Col>
                    </Row>
                    <Row justify="start">
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <img src={paypal9} alt="paypal9" />
                        </Col>
                    </Row>
                    <Row justify="start">
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <h3><b>การเชื่อมเยื่องบัญชีธนาคารหรือบัตรเครดิตหรือเดรบิต</b></h3>
                            <p>โดยคลิกที่เมนู กระเป๋าสตางค์ แล้วเลือกหัวข้อที่ต้องการเชื่อมโยงนั้น</p>
                            <ul>
                                <li>เชื่อมโยงบัญชีธนาคาร</li>
                                <li>เชื่อมโยงบัตรเครดิตหรือเดบิต</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row justify="start">
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <img src={paypal10} alt="paypal10" />
                        </Col>
                    </Row>
                    <Row justify="start">
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <p>ตัวอย่างเมื่อเชื่อมโยงบัตรเครดิตและเดบิตสำเร็จแล้ว</p>
                        </Col>
                    </Row>
                    <Row justify="start">
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <img src={paypal11} alt="paypal11" />
                        </Col>
                    </Row>
                    <Row justify="start">
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <p style={{color:"red"}}>หมายเหตุเพื่อความปลอดภัย ในการสมัครเว็บไซต์ที่เกี่ยวข้องกับการทำธรุกรรมทางด้านการเงิน ซึ่งเป็นเว็บที่เก็บข้อมูลสำคัญต่างๆที่สำคัญของลูกค้าไว้ เช่น บัญชีธนาคาร เลขบัตรเครดิตหรือเดบิต ท่านต้องให้ความสำคัญว่า จะต้องเป็นเว็บไซต์จริงที่มีความปลอดภัย ไม่ใช้เว็บปลอม ซึ่งสามารถดูได้จาก ตรง url (ที่อยู่) ที่มีเครื่องหมายปลอดภัย(รูปล็อคกุญแจ) และเป็นแท็บสีเขียว ตามตัวอย่าง</p>
                        </Col>
                    </Row>
                    <Row justify="start">
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <img src={paypal12} alt="paypal12" />
                        </Col>
                    </Row>
                    <Row justify="start">
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <h3><b>Reference</b></h3>
                            <ul>
                                <li>https://www.forexinthai.com/how-to-register-paypal-update/</li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Content>
        )
    }
}