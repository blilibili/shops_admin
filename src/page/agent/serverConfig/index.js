import React , {Component} from 'react'
import ServiceList from "../../productManage/productManage";
import {Tabs} from "zent";
import Deduct from './deduct/deduct'
import BaseConfig from './baseConfig/base'
const TabPanel = Tabs.TabPanel;
class AgentManage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            activeId: '1'
        }
    }
    onTabChange = (id) => {
        this.setState({
            activeId: id
        })
    }
    render(){
        return(
            <div>
                <Tabs
                    activeId={this.state.activeId}
                    onChange={this.onTabChange}
                >
                    <TabPanel
                        tab={<span>基本设置</span>}
                        id="1"
                    >
                        <BaseConfig></BaseConfig>
                    </TabPanel>
                    <TabPanel
                        tab="提成设置"
                        id="2"
                    >
                        <Deduct></Deduct>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default AgentManage