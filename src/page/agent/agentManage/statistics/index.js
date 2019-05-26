// 售后
import React , {Component} from 'react'
import {Button , Select , Input , DateRangePicker } from 'zent'

import StatisticsTable from './component/statisticsTable'
import './index.scss'
const Option = Select.Option;
class StatisticsIndex extends React.Component{
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
                        <Button>搜索业绩排行榜</Button>
                        <Button>搜索团队排行榜</Button>
                        <Button>搜索直属会员排行榜</Button>
                    </div>
                    <div className="mu-controller">
                        <Input placeholder='输入代理人'/>
                        <Button style={{marginLeft: '10px'}}>搜索</Button>
                    </div>
                </div>

                <div className='search-controller'>
                    <div className='block'>
                        <div className='label'>代理级别: </div>
                        <Select>
                            <Option value="1">全部</Option>
                            <Option value="2">一级</Option>
                        </Select>
                    </div>
                </div>

                <StatisticsTable></StatisticsTable>
            </div>
        )
    }
}

export default StatisticsIndex
