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
                        tab={<span>等级设置</span>}
                        id="1"
                    >
                        等级设置
                    </TabPanel>
                    <TabPanel
                        tab="积分设置"
                        id="2"
                    >
                        积分设置
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default AgentConfig