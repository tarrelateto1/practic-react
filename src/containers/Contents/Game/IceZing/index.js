import React, { Component } from "react";
import { Layout, Row, Col } from "antd";

// register images
import register1 from "../../../../assets/IceZing/register/register1.png";
// import register2 from "../../../../assets/IceZing/register/register2.jpg";

//howTo images
import howto1 from "../../../../assets/IceZing/howto/howwork1.png"
import howto2 from "../../../../assets/IceZing/howto/howwork2.png"
import howto3 from "../../../../assets/IceZing/howto/howwork3.png"
// import howto4 from "../../../../assets/Coin-farm/howTo/howto4.jpg"
// import howto5 from "../../../../assets/Coin-farm/howTo/howto5.jpg"

//redeem images
import redeem1 from "../../../../assets/IceZing/redeem/redeem1.png"
import redeem2 from "../../../../assets/IceZing/redeem/redeem2.png"
import redeem3 from "../../../../assets/IceZing/redeem/redeem3.png"
import redeem4 from "../../../../assets/IceZing/redeem/redeem4.png"



const { Content } = Layout;
export default class IceZing extends Component {
    render() {
        return (
            <Content style={{ margin: '24px 16px 0' }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360, margin: '24px 16px 0' }}>
                    <Row justify="start" >
                        <Col sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }} >
                            <h1>Ice-Zing.com</h1>
                            <p>วิธีในการถอนเงิน : Paypal และ อื่นๆ</p>
                            <p> คำอธิบายเกม : เกมฟาร์มไข่นกยิ่งมีไข่มากก็สามารถนำไปแลกเหรียญได้</p>
                        </Col>
                    </Row>
                    <Row justify="start">
                        <Col
                            sm={{ span: 12 }}
                            md={{ span: 12 }}
                            lg={{ span: 12 }}
                            xl={{ span: 12 }}
                        >
                            <p>ลิ้งโหลดแอพ :{" "}
                                <a
                                    href={"https://ice-zing.com/register/59U7PH6zL4rbTOBjasTX"}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    &nbsp; คลิก
                                </a>
                            </p>
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
                                <h3>ขั้นตอนการทำงาน</h3>
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
                        <Col sm={{ span: 12 }} md={{ span: 12 }}
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
                        <Col
                            sm={{ span: 12 }}
                            md={{ span: 12 }}
                            lg={{ span: 8 }}
                            xl={{ span: 8 }}
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
                                            <img src={howto3} alt="howto3" />
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
                        <Col
                            sm={{ span: 12 }}
                            md={{ span: 12 }}
                            lg={{ span: 8 }}
                            xl={{ span: 8 }}
                        >
                            <div className="bd-rad">
                                <Row justify="center">
                                    <Col span={2}>
                                        <h2>3</h2>
                                    </Col>
                                </Row>
                                <Row justify="center">
                                    <Col span={24}>
                                        <div style={{ align: "center" }}>
                                            <div className="ct">
                                                <img src={redeem3} alt="redeem3" />
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
                                        <h2>4</h2>
                                    </Col>
                                </Row>
                                <Row justify="center">
                                    <Col span={24}>
                                        <div style={{ align: "center" }}>
                                            <div className="ct">
                                                <img src={redeem4} alt="redeem4" />
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Content>
        );
    }
}
