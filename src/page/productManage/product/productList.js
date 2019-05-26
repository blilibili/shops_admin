// 售后
import React , {Component} from 'react'
import {Button , Select , Input , DateRangePicker } from 'zent'

import ProductTable from './component/productTable'
import './product.scss'
const Option = Select.Option;
class ProductList extends React.Component{
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
                        <Button>添加商品</Button>
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
                        <div className='label'>商品状态: </div>
                        <Select>
                            <Option value="1">全部</Option>
                            <Option value="2">出售中</Option>
                            <Option value="3">仓库中</Option>
                            <Option value="3">已售罄</Option>
                        </Select>
                    </div>
                </div>

                <ProductTable></ProductTable>
            </div>
        )
    }
}

export default ProductList
