import React, { Component } from 'react';
import { render } from 'react-dom';
import { Row, Col } from 'antd';
import { Button } from 'antd';


export default class About extends Component {
    render() {
        console.log(123)
        return (
            <div class="main">
                <Row>
                  <Col span={12}>col-12</Col>
                  <Col span={12}>col-12</Col>
                </Row>
                <Row>
                  <Col span={8}>col-8</Col>
                  <Col span={8}>col-8</Col>
                  <Col span={8}>col-8</Col>
                </Row>
                <Row>
                  <Col span={6}>col-6</Col>
                  <Col span={6}>col-6</Col>
                  <Col span={6}>col-6</Col>
                  <Col span={6}>col-6</Col>
                </Row>
                <Button type="primary">main</Button>
            </div>
        );
    }
}
