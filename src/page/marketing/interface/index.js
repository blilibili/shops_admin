import React , {Component} from 'react'
import {Tabs} from "zent";
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
                        tab={<span>微信公众号</span>}
                        id="1"
                    >

                    </TabPanel>
                    <TabPanel
                        tab="微博"
                        id="2"
                    >

                    </TabPanel>
                    <TabPanel
                        tab="生活号"
                        id='3'
                    >

                    </TabPanel>
                    <TabPanel
                        tab="开放接口"
                        id='4'
                    >

                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default AgentManage