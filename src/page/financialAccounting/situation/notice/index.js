// 售后
import React , {Component} from 'react'
import {Button , Select , Input , DateRangePicker } from 'zent'

import NoticeListTable from './component/noticeListTable'
import './index.scss'
const Option = Select.Option;
class NoticeIndex extends React.Component{
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
                    站内公告
                </div>

                <div className='search-controller'>
                    <div className='block'>

                    </div>
                </div>

                <NoticeListTable></NoticeListTable>
            </div>
        )
    }
}

export default NoticeIndex
