import React, {Component} from "react";
import {Card, Carousel, Layout} from "antd";
import { Row, Col } from 'antd';

import '../../styles/Home.css'

const { Meta } = Card;
const {Content} = Layout

class Home extends Component{
    render() {
        return (
            <Content style={{ margin: '24px 16px 0' }}>
                <Row>
                    <Col sm={{span:24}} md={{span:24}} lg={{span:24}} xl={{span:24}}>
                <Carousel autoplay>
                    <div>
                        <h3>build </h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                </Carousel>
                    </Col>
                </Row>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 ,margin: '24px 16px 0'}}>
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