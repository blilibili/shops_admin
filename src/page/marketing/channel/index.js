import React , {Component} from 'react'
import {Tabs} from "zent";
import ArticleIndex from './article/index'

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
                        tab={<span>文章列表</span>}
                        id="1"
                    >
                        <ArticleIndex></ArticleIndex>
                    </TabPanel>
                    <TabPanel
                        tab="推广设置"
                        id="2"
                    >

                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default AgentManage