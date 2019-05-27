import React , {Component} from 'react'
import {Tabs} from "zent";
import OrderReport from './order/index'
import CommissionReport from './commission/index'

const TabPanel = Tabs.TabPanel;
class ReportIndex extends React.Component{
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
                        tab={<span>订单报表</span>}
                        id="1"
                    >
                        <OrderReport></OrderReport>
                    </TabPanel>
                    <TabPanel
                        tab="佣金报表"
                        id="2"
                    >
                        <CommissionReport></CommissionReport>
                    </TabPanel>
                    <TabPanel
                        tab="营业报表"
                        id="3"
                    >
                        营业报表
                    </TabPanel>
                    <TabPanel
                        tab="退款报表"
                        id="4"
                    >
                        退款报表
                    </TabPanel>
                    <TabPanel
                        tab="成本报表"
                        id="5"
                    >
                        成本报表
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default ReportIndex