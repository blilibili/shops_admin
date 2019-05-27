import React , {Component} from 'react'
import {Tabs} from "zent";
import Coupon from './coupon/coupon'
import Bonus from './bonus/index'
import Activity from './activity/index'
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
                        tab={<span>业务趋势</span>}
                        id="1"
                    >
                        业务趋势
                    </TabPanel>
                    <TabPanel
                        tab="代理趋势"
                        id="2"
                    >
                        代理趋势
                    </TabPanel>
                    <TabPanel
                        tab="会员趋势"
                        id='3'
                    >
                        会员趋势
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default AgentManage