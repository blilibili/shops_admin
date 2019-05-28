import React , {Component} from 'react'
import {Tabs} from "zent";
const TabPanel = Tabs.TabPanel;
class AgentConfig extends React.Component{
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
                        tab={<span>代理门槛设置</span>}
                        id="1"
                    >
                        代理门槛设置
                    </TabPanel>
                    <TabPanel
                        tab="提成设置"
                        id="2"
                    >
                        提成设置
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default AgentConfig