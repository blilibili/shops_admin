// 售后
import React , {Component} from 'react'
import {Button , Select , Input , DateRangePicker } from 'zent'

import ApplyListTable from './component/applyListTable'
import './apply.scss'
const Option = Select.Option;
class ApplyList extends React.Component{
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
                        <Button>代理申请</Button>
                        <Button>代理商审核</Button>
                    </div>
                    <div className="mu-controller">

                        <Button style={{marginLeft: '10px'}}>搜索</Button>
                    </div>
                </div>

                <div className='search-controller'>
                    <div className='block'>
                        <div className='label'>进度: </div>
                        <Select>
                            <Option value="1">全部</Option>
                            <Option value="2">开始</Option>
                            <Option value="3">结束</Option>
                        </Select>
                    </div>
                </div>

                <ApplyListTable></ApplyListTable>
            </div>
        )
    }
}

export default ApplyList
