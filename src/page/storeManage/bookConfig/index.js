import React , {Component} from 'react'
import {Tabs} from "zent";
const TabPanel = Tabs.TabPanel;
class StoreBookConfig extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            activeId: '1'
        }
    }
    render(){
        return(
            <div>
                预约设置
            </div>
        )
    }
}

export default StoreBookConfig