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
                        tab={<span>优惠券营销</span>}
                        id="1"
                    >
                        <Coupon></Coupon>
                    </TabPanel>
                    <TabPanel
                        tab="积分营销"
                        id="2"
                    >
                        <Bonus></Bonus>
                    </TabPanel>
                    <TabPanel
                        tab="营销活动"
                        id='3'
                    >
                        <Activity></Activity>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default AgentManage