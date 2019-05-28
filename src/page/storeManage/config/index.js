import React , {Component} from 'react'
import {Tabs} from "zent";
const TabPanel = Tabs.TabPanel;
class StoreConfig extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            activeId: '1'
        }
    }

    render(){
        return(
            <div>
                店铺设置
            </div>
        )
    }
}

export default StoreConfig