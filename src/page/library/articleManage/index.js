import React , {Component} from 'react'
import {Tabs} from "zent";
const TabPanel = Tabs.TabPanel;
class ArticleManage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            activeId: '1'
        }
    }

    render(){
        return(
            <div>
                文章管理
            </div>
        )
    }
}

export default ArticleManage