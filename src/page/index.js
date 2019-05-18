import React from 'react';
import { Layout } from 'zent';
import { Route, Switch } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Menu from './common/component/menu'
import Headers from './common/component/header'
import ContentIndex from './home/index'
import './index.scss'

const { Row, Col } = Layout
function Test(){
    let self = this
    return (
        <div>
            <button onClick={e => console.log(self)}>test</button>
        </div>
    )
}

function HomeIndex() {
    return (
        <div className="root-page">
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
                        <Router>
                            <Switch>
                                <Route exact path="/" component={ContentIndex}/>
                                <Route path="/test" component={Test}/>
                            </Switch>
                        </Router>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default HomeIndex;
