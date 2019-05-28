import React , {Component} from 'react'
import {Tabs} from "zent";
const TabPanel = Tabs.TabPanel;
class SafeCenter extends React.Component{
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
                        tab={<span>角色管理</span>}
                        id="1"
                    >
                        角色管理
                    </TabPanel>
                    <TabPanel
                        tab="权限设置"
                        id="2"
                    >
                        权限设置
                    </TabPanel>
                    <TabPanel
                        tab="用户设置"
                        id="3"
                    >
                        用户设置
                    </TabPanel>
                    <TabPanel
                        tab="操作日志"
                        id="4"
                    >
                        操作日志
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default SafeCenter