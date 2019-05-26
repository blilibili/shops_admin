import React , {Component} from 'react'
import {Button , Select , Input , DateRangePicker } from 'zent'

import ExamineTable from './component/examineTable'
import './book.scss'
const Option = Select.Option;
class BookList extends React.Component{
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
                        <Select>
                            <Option value="1">到店姓名</Option>
                            <Option value="2">到店手机号</Option>
                            <Option value="3">会员姓名</Option>
                            <Option value="3">会员手机号</Option>
                            <Option value="3">会员编号</Option>
                            <Option value="3">手艺人名称</Option>
                        </Select>
                        <Input placeholder="请输入" />
                        <Button style={{marginLeft: '10px'}}>搜索</Button>
                    </div>
                </div>

                <div className='search-controller'>
                    <div className='block'>
                        <div className='label'>到店时间: </div>
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

                <ExamineTable></ExamineTable>
            </div>
        )
    }
}

export default BookList
