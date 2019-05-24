import React , { Component} from 'react'
import {Layout , Card  } from 'zent'
import '../index.scss'
const { Row, Col } = Layout

class ContentIndex extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div class="home-page">
                <Card style={{ width: 100 + '%' }}
                      title="今日概况"
                      action={<a target="_blank" href="//youzan.com">更多数据</a>}>
                    <div>
                        <div className="title">
                            <Row>
                                <Col span={4} offset={2}>主营收入</Col>
                                <Col span={4} offset={2}>售卡金额</Col>
                                <Col span={4} offset={2}>充值金额</Col>
                                <Col span={4} offset={2}>耗卡金额</Col>
                            </Row>
                            <Row style={{marginTop: '20px', fontSize: '25px'}}>
                                <Col span={4} offset={2}>0.00</Col>
                                <Col span={4} offset={2}>0.00</Col>
                                <Col span={4} offset={2}>0.00</Col>
                                <Col span={4} offset={2}>0.00</Col>
                            </Row>
                        </div>
                        <div className="title">
                            <Row>
                                <Col span={4} offset={2}>主营退款</Col>
                                <Col span={4} offset={2}>售卡退款</Col>
                                <Col span={4} offset={2}>耗卡回退</Col>
                            </Row>
                            <Row style={{marginTop: '20px', fontSize: '25px'}}>
                                <Col span={4} offset={2}>0.00</Col>
                                <Col span={4} offset={2}>0.00</Col>
                                <Col span={4} offset={2}>0.00</Col>
                            </Row>
                        </div>
                    </div>
                </Card>


                <Card style={{ width: 100 + '%' , marginTop: '20px' , fontSize: '14px' }}
                      title="更多功能"
                      action={<a target="_blank" href="//youzan.com">更多数据</a>}>
                    <div>
                        <div className="title">
                            <Row>
                                <Col span={4} offset={2}>主营收入</Col>
                                <Col span={4} offset={2}>售卡金额</Col>
                                <Col span={4} offset={2}>充值金额</Col>
                                <Col span={4} offset={2}>耗卡金额</Col>
                            </Row>
                            <Row style={{marginTop: '20px', fontSize: '25px'}}>
                                <Col span={4} offset={2}>0.00</Col>
                                <Col span={4} offset={2}>0.00</Col>
                                <Col span={4} offset={2}>0.00</Col>
                                <Col span={4} offset={2}>0.00</Col>
                            </Row>
                        </div>
                        <div className="title">
                            <Row>
                                <Col span={4} offset={2}>主营退款</Col>
                                <Col span={4} offset={2}>售卡退款</Col>
                                <Col span={4} offset={2}>耗卡回退</Col>
                            </Row>
                            <Row style={{marginTop: '20px', fontSize: '25px'}}>
                                <Col span={4} offset={2}>0.00</Col>
                                <Col span={4} offset={2}>0.00</Col>
                                <Col span={4} offset={2}>0.00</Col>
                            </Row>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}

export default ContentIndex
