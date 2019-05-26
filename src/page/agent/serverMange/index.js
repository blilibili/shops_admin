import React , {Component} from 'react'
import ServiceList from "../../productManage/productManage";
import {Tabs} from "zent";
import CommissonList from './commisson/commissonList'
import CashOut from './cashOut/cashOut'
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
                        tab={<span>代理业务统计</span>}
                        id="1"
                    >
                        <Statistics></Statistics>
                    </TabPanel>
                    <TabPanel
                        tab="佣金列表"
                        id="2"
                    >
                        <CommissonList></CommissonList>
                    </TabPanel>
                    <TabPanel
                        tab="提现管理"
                        id='3'
                    >
                        <CashOut></CashOut>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default AgentManage