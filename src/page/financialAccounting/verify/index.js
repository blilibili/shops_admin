import React , {Component} from 'react'
import {Tabs} from "zent";
const TabPanel = Tabs.TabPanel;
class ServerVerify extends React.Component{
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
                业务对账
            </div>
        )
    }
}

export default ServerVerify