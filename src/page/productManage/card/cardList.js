// 售后
import React , {Component} from 'react'
import {Button , Select , Input , DateRangePicker } from 'zent'

import CardTable from './component/cardTable'
import './card.scss'
const Option = Select.Option;
class CardList extends React.Component{
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
                        <Button>添加卡券</Button>
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
                        <div className='label'>卡类型: </div>
                        <Select>
                            <Option value="1">全部</Option>
                            <Option value="2">次卡</Option>
                            <Option value="3">折扣卡</Option>
                            <Option value="3">充值卡</Option>
                        </Select>
                        <div className='label'>卡项门店: </div>
                        <Select>
                            <Option value="1">全部</Option>
                            <Option value="2">总部</Option>
                            <Option value="3">平台</Option>
                        </Select>
                    </div>
                </div>

                <CardTable></CardTable>
            </div>
        )
    }
}

export default CardList
