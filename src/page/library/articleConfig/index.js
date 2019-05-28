import React , {Component} from 'react'
import {Tabs} from "zent";
const TabPanel = Tabs.TabPanel;
class ArticleConfig extends React.Component{
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
                        tab={<span>分类设置</span>}
                        id="1"
                    >
                        分类设置
                    </TabPanel>
                    <TabPanel
                        tab="投稿奖励"
                        id="2"
                    >
                        投稿奖励
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default ArticleConfig