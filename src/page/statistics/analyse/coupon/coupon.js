// 售后
import React , {Component} from 'react'
import {Button , Select , Input , DateRangePicker } from 'zent'

import CouponListTable from './component/couponListTable'
import './index.scss'
const Option = Select.Option;
class Coupon extends React.Component{
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
                        <Button>购买优惠券</Button>
                    </div>
                    <div className="mu-controller">

                        <Button style={{marginLeft: '10px'}}>搜索</Button>
                    </div>
                </div>

                <div className='search-controller'>
                    <div className='block'>
                        <div className='label'>优惠券类别: </div>
                        <Select>
                            <Option value="1">全部</Option>
                            <Option value="2">未领取</Option>
                            <Option value="3">已领取</Option>
                            <Option value="3">已使用</Option>
                            <Option value="3">已过期</Option>
                        </Select>
                    </div>
                </div>

                <CouponListTable></CouponListTable>
            </div>
        )
    }
}

export default Coupon
