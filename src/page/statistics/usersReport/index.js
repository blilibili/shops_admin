import React , {Component} from 'react'
import {Tabs} from "zent";
import Inside from './inside/index'
import NoticeIndex from './notice/index'
import SmsIndex from './sms/index'
const TabPanel = Tabs.TabPanel;
class UsersReport extends React.Component{
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
                        tab={<span>代理数据</span>}
                        id="1"
                    >
                        代理数据
                    </TabPanel>
                    <TabPanel
                        tab="会员数据"
                        id="2"
                    >
                        会员数据
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default UsersReport