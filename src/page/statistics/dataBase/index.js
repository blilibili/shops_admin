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
    render(){
        return(
            <div>
                数据概况
            </div>
        )
    }
}

export default AgentManage