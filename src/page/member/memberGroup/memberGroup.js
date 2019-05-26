// 售后
import React , {Component} from 'react'
import {Button , Select , Input , DateRangePicker , Radio  } from 'zent'

import MemberGroupTable from './component/memberGroupTable'
import './member.scss'
const Option = Select.Option;
const RadioGroup = Radio.Group;
class MemberGroup extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            rangeValue: '',
            type: '1'
        }
    }
    onChange = (e) => {
        this.setState({ type: e.target.value });
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
                        <Button>添加新会员定义</Button>
                        <Button>添加活跃会员定义</Button>
                        <Button>添加沉睡会员定义</Button>
                    </div>
                    <div className="mu-controller">
                        <Input placeholder="搜索组名" />
                        <Button style={{marginLeft: '10px'}}>搜索</Button>
                    </div>
                </div>

                <MemberGroupTable></MemberGroupTable>
            </div>
        )
    }
}

export default MemberGroup
