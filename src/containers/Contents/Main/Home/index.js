import React, {Component} from "react";
import {Card, Layout} from "antd";
import {Row, Col} from 'antd';

import './Home.css'
import {Link} from "react-router-dom";

//Icon image
import clipclapIcon from "src/assets/icon/clipclapIcon.png"
import milieuIcon from "src/assets/icon/milieuIcon.png"
import surveyonIcon from "src/assets/icon/surveyonIcon.png"

const {Meta}=Card;
const {Content}=Layout

class Home extends Component {
    render() {
        return (
            <Content style={{margin: '24px 16px 0'}}>
                <div className="site-layout-background" style={{padding: 24, minHeight: 360, margin: '24px 16px 0'}}>
                    <Row justify="center" align="middle">
                        <Col sm={{span: 12}} md={{span: 12}} lg={{span: 6}} xl={{span: 6}}>
                            <Link to="/clip/clipclap">
                                <Card
                                    hoverable
                                    style={{width: "auto"}}
                                    cover={<img alt="example"
                                                src={clipclapIcon}/>}>
                                    <Meta title="งานดูคลิป" description=""/>
                                </Card>
                            </Link>
                        </Col>
                        <Col sm={{span: 12}} md={{span: 12}} lg={{span: 6}} xl={{span: 6}}>
                            <Link to="/game/brain-battle">
                                <Card
                                    hoverable
                                    style={{width: "auto"}}
                                    cover={<img alt="example"
                                                src="https://lh3.googleusercontent.com/D8P8dF4duodgpOBacxJoV9fcfSM6IkQaVtwwOWKuGGQhEtRjaccE1EvJZ50UCDHx_nk"/>}>
                                    <Meta title="งานคิดเลข" description=""/>
                                </Card>
                            </Link>
                        </Col>
                        <Col sm={{span: 12}} md={{span: 12}} lg={{span: 6}} xl={{span: 6}}>
                            <Link to="/game/coin-farm">
                                <Card
                                    hoverable
                                    style={{width: "auto"}}
                                    cover={<img alt="example"
                                                src="https://i2.wp.com/cryptokiemtien.com/wp-content/uploads/2019/09/CF.gif?fit=403%2C336&ssl=1"/>}>
                                    <Meta title="งานเกมฟาร์ม" description=""/>
                                </Card>
                            </Link>
                        </Col>
                        <Col sm={{span: 12}} md={{span: 12}} lg={{span: 6}} xl={{span: 6}}>
                            <Link to="/survey/milieu">
                                <Card
                                    hoverable
                                    style={{width: "auto"}}
                                    cover={<img alt="example"
                                                src={milieuIcon}/>}>
                                    <Meta title="งานแบบสอบถาม" description="Milieu"/>
                                </Card>
                            </Link>
                        </Col>
                    </Row>
                    <Row justify="start" align="middle">
                        <Col sm={{span: 12}} md={{span: 12}} lg={{span: 6}} xl={{span: 6}}>
                            <Link to="/survey/surveyon">
                                <Card
                                    hoverable
                                    style={{width: "auto"}}
                                    cover={<img alt="example"
                                                src={surveyonIcon}/>}>
                                    <Meta title="งานแบบสอบถาม" description="Surveyon"/>
                                </Card>
                            </Link>
                        </Col>
                    </Row>
                </div>
            </Content>
        );
    }
}

export default Home