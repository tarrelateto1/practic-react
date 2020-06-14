import React, { Component } from 'react';
import {Layout,Row,Col} from "antd"

import './ClipClap.css'

const {Content}=Layout
export default class ClipClap extends Component {
    render() {
        return (
            <Content style={{ margin: '24px 16px 0' }}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360, margin: '24px 16px 0' }}>
                    <Row justify="start" >
                        <Col sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 6 }} xl={{ span: 6 }} >
                        <h1>ClipClap</h1>
                        </Col>
                    </Row>
                </div>
            </Content>
        )
    }
}