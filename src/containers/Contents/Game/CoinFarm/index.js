import React, { Component } from "react";
import { Layout, Row, Col } from "antd";

// register images
import register1 from "../../../../assets/Coin-farm/register/register1.jpg";
import register2 from "../../../../assets/Coin-farm/register/register2.jpg";

//howTo images
import howto1 from "../../../../assets/Coin-farm/howTo/howto1.jpg"
import howto2 from "../../../../assets/Coin-farm/howTo/howto2.jpg"
import howto3 from "../../../../assets/Coin-farm/howTo/howto3.jpg"
import howto4 from "../../../../assets/Coin-farm/howTo/howto4.jpg"
import howto5 from "../../../../assets/Coin-farm/howTo/howto5.jpg"

//redeem images
import redeem1 from "../../../../assets/Coin-farm/redeem/redeem1.jpg"


const { Content } = Layout;
export default class CoinFarm extends Component {
  render() {
    return (
      <Content style={{ margin: "24px 16px 0" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360, margin: "24px 16px 0" }}
        >
          <Row justify="start">
            <Col
              sm={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 24 }}
              xl={{ span: 24 }}
            >
              <h1>CoinFarm</h1>
              <p>วิธีในการถอนเงิน : Paypal และ อื่นๆ</p>
              <p>
                คำอธิบายเกม : เกมฟาร์มไข่นกยิ่งมีไข่มากก็สามารถนำไปแลกเหรียญได้
              </p>
            </Col>
          </Row>
          <Row justify="start">
            <Col
              sm={{ span: 12 }}
              md={{ span: 12 }}
              lg={{ span: 12 }}
              xl={{ span: 12 }}
            >
              <p>
                ลิ้งโหลดแอพ :{" "}
                <a
                  href={"https://coin-farm.net/?r=1621929"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                    <div className="ct">
                      <img src={register2} alt="register2" />
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
            < Col
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
                    <div className="ct">
                      <img src={howto4} alt="howto4" />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            < Col
              sm={{ span: 12 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
              xl={{ span: 8 }}
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
                      <img src={howto5} alt="howto5" />
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
          </Row>
        </div>
      </Content>
    );
  }
}
