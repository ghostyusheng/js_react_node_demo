import React, { Component } from 'react';
import { render } from 'react-dom';
import { Row, Col } from 'antd';
import { Form, Icon, Input, Button } from 'antd';


export default class About extends Component {
    render() {
        console.log(123)
        return (
            <div class="main-login">
                <div class="card">
                    <Row class="login-row">
                      <Col span={6} className="login-col">
                        <label>用户名</label>
                      </Col>
                      <Col span={6} className="login-col">
                        <Input className="login-input"
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />
                      </Col>
                    </Row>
                    <Row class="login-row">
                      <Col span={6} className="login-col">
                        <label>密码</label>
                      </Col>
                      <Col span={6} className="login-col">
                        <Input className="login-input"
                          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          type="password"
                          placeholder="Password"
                        />
                      </Col>
                    </Row>
                    <Row class="login-row">
                        <Button type="primary" className="login-submit">提交</Button>
                    </Row>
                </div>
            </div>
        );
    }
}
