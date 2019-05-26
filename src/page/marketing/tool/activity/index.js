// 售后
import React , {Component} from 'react'
import {Button , Select , Input , DateRangePicker } from 'zent'

import ActivityTable from './component/activityTable'
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
                        <Button>限时秒杀</Button>
                        <Button>多人拼团</Button>
                        <Button>一起砍价</Button>
                        <Button>满就减</Button>
                        <Button>新人体验</Button>
                        <Button>节日问候</Button>
                    </div>
                    <div className="mu-controller">

                    </div>
                </div>

                <div className='search-controller'>
                    <div className='block'>

                    </div>
                </div>

                {/*<ActivityTable></ActivityTable>*/}
            </div>
        )
    }
}

export default StatisticsIndex
