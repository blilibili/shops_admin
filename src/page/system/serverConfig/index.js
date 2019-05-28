import React , {Component} from 'react'
import {Tabs} from "zent";
const TabPanel = Tabs.TabPanel;
class ServerConfig extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            activeId: '1',
            activeId2: '1'
        }
    }
    onTabChange = (id) => {
        this.setState({
            activeId: id
        })
    }
    onTabChangeAnother = (id) => {
        this.setState({
            activeId2: id
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
                        tab={<span>交易设置</span>}
                        id="1"
                    >
                        交易设置
                    </TabPanel>
                    <TabPanel
                        tab="运费模板"
                        id="2"
                    >
                        运费模板
                    </TabPanel>
                    <TabPanel
                        tab="物流地址"
                        id="3"
                    >
                        <Tabs
                            activeId={this.state.activeId2}
                            onChange={this.onTabChangeAnother}
                        >
                            <TabPanel
                                tab={<span>自提点设置</span>}
                                id="1"
                            >
                                自提点设置
                            </TabPanel>
                            <TabPanel
                                tab="发件人信息"
                                id="2"
                            >
                                发件人信息
                            </TabPanel>
                        </Tabs>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default ServerConfig