import React , {Component} from 'react'
import {Tabs} from "zent";
import Inside from './inside/index'
import NoticeIndex from './notice/index'
import SmsIndex from './sms/index'
const TabPanel = Tabs.TabPanel;
class MoneySituation extends React.Component{
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
                资金概况
            </div>
        )
    }
}

export default MoneySituation