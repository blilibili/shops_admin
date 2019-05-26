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
                            <Option value="2">待付款</Option>
                            <Option value="3">待发货</Option>
                            <Option value="3">已发货</Option>
                            <Option value="3">已完成</Option>
                            <Option value="3">已取消</Option>
                            <Option value="3">已关闭</Option>
                        </Select>
                        <Button style={{marginLeft: '10px'}}>搜索</Button>
                    </div>
                </div>

                <div className='search-controller'>
                    <div className='block'>
                        <div className='label'>下单时间: </div>
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
                        <div className='label'>付款方式: </div>
                        <Select>
                            <Option value="1">全部</Option>
                            <Option value="2">现金</Option>
                            <Option value="3">微信</Option>
                            <Option value="3">支付宝</Option>
                            <Option value="3">会员余额</Option>
                            <Option value="3">刷卡</Option>
                            <Option value="3">E卡</Option>
                        </Select>
                        <div className='label'>付款方式: </div>
                        <Select>
                            <Option value="1">所有订单</Option>
                            <Option value="2">品项订单</Option>
                            <Option value="3">售卡订单</Option>
                            <Option value="3">充值订单</Option>
                        </Select>
                        <div className='label'>下单门店: </div>
                        <Select>
                            <Option value="1">全部</Option>
                            <Option value="2">总部</Option>
                            <Option value="3">平台</Option>
                        </Select>

                        <div className='label'>积分抵扣: </div>
                        <Select>
                            <Option value="1">全部</Option>
                            <Option value="2">使用</Option>
                            <Option value="3">未使用</Option>
                        </Select>

                        <div className='label'>营销订单: </div>
                        <Select>
                            <Option value="1">全部</Option>
                            <Option value="2">积分兑换</Option>
                        </Select>
                    </div>
                </div>

                <OrderTable></OrderTable>
            </div>
        )
    }
}

export default OrderList
