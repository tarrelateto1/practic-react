import React, {Component} from 'react';
import {Col, Layout, Row} from "antd"
import {Link} from "react-router-dom";
//register images
import register1 from "../../../../assets/Advertise/neobux/register/register1.png";
import register2 from "../../../../assets/Advertise/neobux/register/register2.png";
import register3 from "../../../../assets/Advertise/neobux/register/register3.png";
import register4 from "../../../../assets/Advertise/neobux/register/register4.png";


//howto images
import howto1 from "../../../../assets/Advertise/neobux/howto/howto1.jpg";
import howto2 from "../../../../assets/Advertise/neobux/howto/howto2.jpg";
import howto3 from "../../../../assets/Advertise/neobux/howto/howto3.jpg";
import howto4 from "../../../../assets/Advertise/neobux/howto/howto4.png";
import howto5 from "../../../../assets/Advertise/neobux/howto/howto5.jpg";

//Withdraw images
import withdraw1 from "../../../../assets/Advertise/neobux/withdraw/withdraw1.jpg";
import withdraw2 from "../../../../assets/Advertise/neobux/withdraw/withdraw2.jpg";
import withdraw3 from "../../../../assets/Advertise/neobux/withdraw/withdraw3.jpg";
import withdraw4 from "../../../../assets/Advertise/neobux/withdraw/withdraw4.jpg";

const {Content} = Layout
export default class Neobux extends Component {
    render() {
        return (
            <Content style={{margin: '24px 16px 0'}}>
                <div className="site-layout-background" style={{padding: 24, minHeight: 360, margin: '24px 16px 0'}}>
                    <Row justify="center">
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <h1>Neobux</h1>
                            <p>วิธีในการถอนเงิน : <Link to="/wallet/paypal">Paypal(สมัคร)</Link> | <Link
                                to="/wallet/paypal-withdraw">Paypal(ถอน)</Link></p>
                            <p>คำอธิบายเว็ปไซต์ : เป็นเว็ปคลิกดูโฆษณา</p>
                            <p>ลิ้งสมัครเว็ป :
                                <a href={"https://www.neobux.com/?r=tarrelateto10"}
                                   target="_blank" rel="noopener noreferrer">
                                    &nbsp; คลิก</a>
                            </p>
                        </Col>
                    </Row>

                    <Row justify="center">
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <div className="ct">
                                <h2><b>วิธีสมัคร</b></h2>
                            </div>
                        </Col>
                    </Row>
                    <Row justify="start">
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <div className="bd-rad">
                                <Row justify="center">
                                    <Col span={2}>
                                        <div className={"ct"}>
                                        <h2>1</h2>
                                        </div>
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
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <div className="bd-rad">
                                <Row justify="center">
                                    <Col span={2}>
                                        <div className={"ct"}>
                                        <h2>2</h2>
                                        </div>
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
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <div className="bd-rad">
                                <Row justify="center">
                                    <Col span={2}>
                                        <div className={"ct"}>
                                        <h2>3</h2>
                                        </div>
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
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
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

                    </Row>
                    <Row justify="center">
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <div className="ct">
                                <h2><b>วิธีทำงาน</b></h2>
                            </div>
                        </Col>
                    </Row>
                    <Row justify="start">
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <div className="bd-rad">
                                <Row justify="center">
                                    <Col span={12}>
                                        <div className="ct">
                                            <h2>1</h2>
                                            <p>คลิกตรงไหนก็ได้ในนี้</p>
                                        </div>
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
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <div className="bd-rad">
                                <Row justify="center">
                                    <Col span={12}>
                                        <div className="ct">

                                            <h2>2</h2>
                                            <p>จะเจอโฆษณา ทั้งสามสี ให้คลิกที่ป้ายโฆษณาทีละป้าย</p>
                                        </div>
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
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <div className="bd-rad">
                                <Row justify="center">
                                    <Col span={12}>
                                        <div className={"ct"}>
                                            <h2>3</h2>
                                            <p>กดปุ่มสีแดง</p>
                                        </div>
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
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <div className="bd-rad">
                                <Row justify="center">
                                    <Col span={12}>
                                        <div className={"ct"}>
                                            <h2>4</h2>
                                            <p> จะมีแถบสีเหลืองโหลดอยู่ รอให้เต็มก่อน </p>
                                        </div>
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
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <div className="bd-rad">
                                <Row justify="center">
                                    <Col span={12}>
                                        <div className={"ct"}>
                                            <h2>5</h2>
                                            <p> เมื่อเต็มก็คลิก ปิด ตามภาพ </p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row justify="center">
                                    <Col span={24}>
                                        <div className="ct">
                                            <img src={howto5} alt="howto5"/>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row justify="center">
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <div className="ct">
                                <h2><b>วิธีถอนเงิน</b></h2>
                            </div>
                        </Col>
                    </Row>
                    <Row justify="start">
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <div className="bd-rad">
                                <Row justify="center">
                                    <Col span={2}>
                                        <div className={"ct"}>
                                        <h2>1</h2>
                                        </div>
                                    </Col>
                                </Row>
                                <Row justify="center">
                                    <Col span={24}>
                                        <div style={{align: "center"}}>
                                            <div className="ct">
                                                <img src={withdraw1} alt="withdraw1"/>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <div className="bd-rad">
                                <Row justify="center">
                                    <Col span={2}>
                                        <div className={"ct"}>
                                        <h2>2</h2>
                                        </div>
                                    </Col>
                                </Row>
                                <Row justify="center">
                                    <Col span={24}>
                                        <div className="ct">
                                            <img src={withdraw2} alt="withdraw2"/>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <div className="bd-rad">
                                <Row justify="center">
                                    <Col span={2}>
                                        <div className={"ct"}>
                                        <h2>3</h2>
                                        </div>
                                    </Col>
                                </Row>
                                <Row justify="center">
                                    <Col span={24}>
                                        <div className="ct">
                                            <img src={withdraw3} alt="withdraw3"/>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 24}}>
                            <div className="bd-rad">
                                <Row justify="center">
                                    <Col span={2}>
                                        <div className={"ct"}>
                                        <h2>4</h2>
                                        </div>
                                    </Col>
                                </Row>
                                <Row justify="center">
                                    <Col span={24}>
                                        <div className="ct">
                                            <img src={withdraw4} alt="withdraw4"/>
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