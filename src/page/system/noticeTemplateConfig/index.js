import React , {Component} from 'react'
import {Tabs} from "zent";
const TabPanel = Tabs.TabPanel;
class NoticeTemplateCofig extends React.Component{
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
                        tab={<span>预约通知模板</span>}
                        id="1"
                    >
                        预约通知模板
                    </TabPanel>
                    <TabPanel
                        tab="注册通知模板"
                        id="2"
                    >
                        注册通知模板
                    </TabPanel>
                    <TabPanel
                        tab="发货通知模板"
                        id="3"
                    >
                        发货通知模板
                    </TabPanel>
                    <TabPanel
                        tab="退款成功模板"
                        id="4"
                    >
                        退款成功模板
                    </TabPanel>
                    <TabPanel
                        tab="代理审核模板"
                        id="5"
                    >
                        代理审核模板
                    </TabPanel>
                    <TabPanel
                        tab="提现通知模板"
                        id="6"
                    >
                        提现通知模板
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default NoticeTemplateCofig