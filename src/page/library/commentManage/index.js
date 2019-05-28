import React , {Component} from 'react'
import {Tabs} from "zent";
const TabPanel = Tabs.TabPanel;
class CommentManage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            activeId: '1'
        }
    }
    render(){
        return(
            <div>
                评论管理
            </div>
        )
    }
}

export default CommentManage