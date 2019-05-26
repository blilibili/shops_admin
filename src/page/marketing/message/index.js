import React , {Component} from 'react'
import {Tabs} from "zent";
import Inside from './inside/index'
import NoticeIndex from './notice/index'
import SmsIndex from './sms/index'
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
                        tab={<span>站内信</span>}
                        id="1"
                    >
                        <Inside></Inside>
                    </TabPanel>
                    <TabPanel
                        tab="站内公告"
                        id="2"
                    >
                        <NoticeIndex></NoticeIndex>
                    </TabPanel>
                    <TabPanel
                        tab="短信通知"
                        id='3'
                    >
                        <SmsIndex></SmsIndex>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default AgentManage