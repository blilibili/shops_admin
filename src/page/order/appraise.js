// 评价管理
import React , {Component} from 'react'
import {Button , Select , Input , DateRangePicker } from 'zent'

import OrderTable from './component/orderTable'
import './orderList.scss'
const Option = Select.Option;
class OrderList extends React.Component{
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
                        <div className='label'>
                            订单状态:
                        </div>
                        <Select>
                            <Option value="1">全部</Option>
                            <Option value="2">退款中</Option>
                            <Option value="3">已退款</Option>
                        </Select>
                        <Button style={{marginLeft: '10px'}}>搜索</Button>
                    </div>
                </div>

                <div className='search-controller'>
                    <div className='block'>
                        <div className='label'>评价时间: </div>
                        <DateRangePicker
                            className="zent-picker-demo"
                            value={rangeValue}
                            defaultValue={["2016-01-01", "2017-01-01"]}
                            onChange={this.onChangeRange}
                        />
                        <Button style={{marginLeft: '10px'}}>今天</Button>
                        <Button>明天</Button>
                        <Button>本周</Button>
                    </div>
                </div>
                <div className='search-controller'>
                    <div className='block'>
                        <div className='label'>评价星级: </div>
                        <Select>
                            <Option value="1">全部</Option>
                            <Option value="2">一星</Option>
                            <Option value="3">二星</Option>
                            <Option value="3">三星</Option>
                            <Option value="3">四星</Option>
                            <Option value="3">五星</Option>
                        </Select>
                        <div className='label'>评价方式: </div>
                        <Select>
                            <Option value="1">全部</Option>
                            <Option value="2">用户自评</Option>
                            <Option value="3">默认好评</Option>
                        </Select>
                    </div>
                </div>

                <div className='search-controller'>
                    <div className='block'>
                        <div className='label'>选择门店: </div>
                        <Select>
                            <Option value="1">全部</Option>
                            <Option value="2">总部</Option>
                            <Option value="3">平台</Option>
                        </Select>
                        <div className='label'>网店展示: </div>
                        <Select>
                            <Option value="1">全部</Option>
                            <Option value="2">展示</Option>
                            <Option value="3">不展示</Option>
                        </Select>
                    </div>
                </div>

                <OrderTable></OrderTable>
            </div>
        )
    }
}

export default OrderList
