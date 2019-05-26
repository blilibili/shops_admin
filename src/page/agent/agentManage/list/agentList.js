// 售后
import React , {Component} from 'react'
import {Button , Select , Input , DateRangePicker } from 'zent'

import AgentListTable from './component/agentListTable'
import './agentList.scss'
const Option = Select.Option;
class AgentList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            rangeValue: ''
        }
    }
    onChangeRange = (val) => {
        this.setState({
            rangeValue: val
        })
    }
    render() {
        const { rangeValue } = this.state;
        return (
            <div className='book-list-page'>
                <div className='title-controller'>
                    <div>

                    </div>
                    <div className="mu-controller">
                        <Input placeholder='输入代理人'/>
                        <Button style={{marginLeft: '10px'}}>搜索</Button>
                    </div>
                </div>

                <div className='search-controller'>
                    <div className='block'>

                    </div>
                </div>

                <AgentListTable></AgentListTable>
            </div>
        )
    }
}

export default AgentList
