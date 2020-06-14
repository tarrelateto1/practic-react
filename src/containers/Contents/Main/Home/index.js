import React, {Component} from "react";
import {Card, Layout} from "antd";
import { Row, Col } from 'antd';

import '../../../../styles/Home.css'
import { Link } from "react-router-dom";

const { Meta } = Card;
const {Content} = Layout

class Home extends Component{
    render() {
        return (
            <Content style={{ margin: '24px 16px 0' }}>
                
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 ,margin: '24px 16px 0'}}>
                        <Row justify="center" align="middle">
                        <Col sm={{span:12}} md={{span:12}} lg={{span:6}} xl={{span:6}} >
                        <Link to="/search">
                            <Card
                                hoverable
                                style={{ width: "auto" }}
                                cover={<img alt="example" src="https://lh3.googleusercontent.com/MoZw2SoDTDZNlGYcH_ljvIsiWtcvJqChgdng5sWo73aXDKnptav9IE8hC0yHG1si0A2i" />}>
                                <Meta title="งานดูคลิป" description="" />
                            </Card>
                            </Link>
                        </Col>
                            <Col sm={{span:12}} md={{span:12}} lg={{span:6}} xl={{span:6}} >
                                <Card
                                    hoverable
                                    style={{ width: "auto" }}
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                                    <Meta title="Europe Street beat" description="www.instagram.com" />
                                </Card>
                            </Col>
                            <Col sm={{span:12}} md={{span:12}} lg={{span:6}} xl={{span:6}} >
                                <Card
                                    hoverable
                                    style={{ width: "auto" }}
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                                    <Meta title="Europe Street beat" description="www.instagram.com" />
                                </Card>
                            </Col>
                            <Col sm={{span:12}} md={{span:12}} lg={{span:6}} xl={{span:6}} >
                                <Card
                                    hoverable
                                    style={{ width: "auto" }}
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                                    <Meta title="Europe Street beat" description="www.instagram.com" />
                                </Card>
                            </Col>
                        </Row>
                        <Row justify="center" align="middle">
                            <Col sm={{span:12}} md={{span:12}} lg={{span:6}} xl={{span:6}} >
                                <Card
                                    hoverable
                                    style={{ width: "auto" }}
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                                    <Meta title="Europe Street beat" description="www.instagram.com" />
                                </Card>
                            </Col>
                            <Col sm={{span:12}} md={{span:12}} lg={{span:6}} xl={{span:6}} >
                                <Card
                                    hoverable
                                    style={{ width: "auto" }}
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                                    <Meta title="Europe Street beat" description="www.instagram.com" />
                                </Card>
                            </Col>
                            <Col sm={{span:12}} md={{span:12}} lg={{span:6}} xl={{span:6}} >
                                <Card
                                    hoverable
                                    style={{ width: "auto" }}
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                                    <Meta title="Europe Street beat" description="www.instagram.com" />
                                </Card>
                            </Col>
                            <Col sm={{span:12}} md={{span:12}} lg={{span:6}} xl={{span:6}} >
                                <Card
                                    hoverable
                                    style={{ width: "auto" }}
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                                    <Meta title="Europe Street beat" description="www.instagram.com" />
                                </Card>
                            </Col>
                        </Row>
                        <Row justify="center" align="middle">
                            <Col sm={{span:12}} md={{span:12}} lg={{span:6}} xl={{span:6}} >
                                <Card
                                    hoverable
                                    style={{ width: "auto" }}
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                                    <Meta title="Europe Street beat" description="www.instagram.com" />
                                </Card>
                            </Col>
                            <Col sm={{span:12}} md={{span:12}} lg={{span:6}} xl={{span:6}} >
                                <Card
                                    hoverable
                                    style={{ width: "auto" }}
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                                    <Meta title="Europe Street beat" description="www.instagram.com" />
                                </Card>
                            </Col>
                            <Col sm={{span:12}} md={{span:12}} lg={{span:6}} xl={{span:6}} >
                                <Card
                                    hoverable
                                    style={{ width: "auto" }}
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                                    <Meta title="Europe Street beat" description="www.instagram.com" />
                                </Card>
                            </Col>
                            <Col sm={{span:12}} md={{span:12}} lg={{span:6}} xl={{span:6}} >
                                <Card
                                    hoverable
                                    style={{ width: "auto" }}
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                                    <Meta title="Europe Street beat" description="www.instagram.com" />
                                </Card>
                            </Col>
                        </Row>
                    </div>
                    </Content>
        );
    }
}
export default Home