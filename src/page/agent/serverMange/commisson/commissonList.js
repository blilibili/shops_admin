// 售后
import React , {Component} from 'react'
import {Button , Select , Input , DateRangePicker } from 'zent'

import CommissonListTable from './component/commissonListListTable'
import './commissonList.scss'
const Option = Select.Option;
class CommissonList extends React.Component{
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
                        佣金列表
                    </div>
                    <div className="mu-controller">

                    </div>
                </div>

                <div className='search-controller'>
                    <div className='block'>

                    </div>
                </div>

                <CommissonListTable></CommissonListTable>
            </div>
        )
    }
}

export default CommissonList
