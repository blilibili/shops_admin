// 售后
import React , {Component} from 'react'
import {Button , Select , Input , DateRangePicker } from 'zent'

import SmsListTable from './component/smsListTable'
const Option = Select.Option;
class BonusIndex extends React.Component{
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
                        <Button>购买短信</Button>
                        <Button>短信购买记录</Button>
                        <Button>模板设置</Button>
                        <Button>群发短信</Button>
                    </div>
                    <div className="mu-controller">

                    </div>
                </div>

                <div className='search-controller'>
                    <div className='block'>

                    </div>
                </div>

            </div>
        )
    }
}

export default BonusIndex
