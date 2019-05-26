import React , {Component} from 'react'
import ServiceList from "../../productManage/productManage";
import {Tabs} from "zent";
import ApplyList from './apply/applyList'
import AgentList from './list/agentList'
import Statistics from './statistics/index'
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
                        tab={<span>代理申请</span>}
                        id="1"
                    >
                        <ApplyList></ApplyList>
                    </TabPanel>
                    <TabPanel
                        tab="代理列表"
                        id="2"
                    >
                        <AgentList></AgentList>
                    </TabPanel>
                    <TabPanel
                        tab="数据统计"
                        id='3'
                    >
                        <Statistics></Statistics>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default AgentManage