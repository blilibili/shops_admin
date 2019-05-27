import React , {Component} from 'react'
import {Tabs} from "zent";
import ArticleIndex from './article/index'

const TabPanel = Tabs.TabPanel;
class CashOut extends React.Component{
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
                提现处理
            </div>
        )
    }
}

export default CashOut