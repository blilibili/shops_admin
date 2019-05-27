// 售后
import React , {Component} from 'react'
import {Button , Select , Input , DateRangePicker } from 'zent'

import OrderTable from './component/commissionTable'
const Option = Select.Option;
class commissionReport extends React.Component{
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

                    </div>
                </div>

                <div className='search-controller'>
                    <div className='block'>

                    </div>
                </div>

                <OrderTable></OrderTable>
            </div>
        )
    }
}

export default commissionReport
