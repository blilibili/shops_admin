// 售后
import React , {Component} from 'react'
import {Button , Select , Input , DateRangePicker } from 'zent'

import AgentListTable from './component/agentListTable'
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
                        <Button>积分商城</Button>
                        <Button>积分活动</Button>
                        <Button>积分设置</Button>
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
