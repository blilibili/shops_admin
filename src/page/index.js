import React , {Component} from 'react';
import { Layout } from 'zent';
import { Route, Switch } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Menu from './common/component/menu'
import Headers from './common/component/header'

import ReactRouter from './Router'
import './index.scss'

const { Row, Col } = Layout

class HomeIndex extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="root-page">
                <Router>
                    <Row>
                        <Col span={3}>
                            <div className="headers">
                                医疗商城后台
                            </div>
                            <Menu />
                        </Col>
                        <Col span={21}>
                            <Headers />

                            <div className="content">
                                <ReactRouter />
                            </div>
                        </Col>
                    </Row>
                </Router>
            </div>
        );
    }
}

export default HomeIndex;
