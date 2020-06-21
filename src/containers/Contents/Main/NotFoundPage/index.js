import React,{Component} from "react"

import {Layout} from "antd";
import {Link} from "react-router-dom";
import { Result, Button } from 'antd';


const {Content} = Layout

class NotFoundPage extends  Component{
    render(){
        return (
            <Content style={{margin: '24px 16px 0'}}>
                <div className="site-layout-background" style={{padding: 24, minHeight: 360, margin: '24px 16px 0'}}>
                    <Result
                        status="404"
                        title="404"
                        subTitle="Sorry, the page you visited does not exist."
                        extra={<Link to="/"><Button type="primary">Back Home</Button></Link>}
                    />
                </div>
            </Content>
        )
    }
}
export default NotFoundPage