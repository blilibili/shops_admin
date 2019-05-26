// 售后
import React , {Component} from 'react'
import {Button , Select , Input , DateRangePicker , Radio  } from 'zent'

import MemberListTable from './component/memberListTable'
import './member.scss'
const Option = Select.Option;
const RadioGroup = Radio.Group;
class MemberList extends React.Component{
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
                        <Button>添加会员</Button>
                        <Button>管理会员卡</Button>
                        <Button>会员设置</Button>
                        <Button>批量导入</Button>
                    </div>
                    <div className="mu-controller">
                        <Input placeholder="会员名,手机号或者会员编号" />
                        <Button style={{marginLeft: '10px'}}>搜索</Button>
                    </div>
                </div>

                <div className='search-controller'>
                    <div className='block'>
                        <div className='label'>消费频次: </div>
                        <RadioGroup onChange={this.onChange} value={this.state.type}>
                            <Radio value="0">全部</Radio>
                            <Radio value="1">1月未消费</Radio>
                            <Radio value="2">2月未消费</Radio>
                            <Radio value="3">3月未消费</Radio>
                            <Radio value="4">自定义</Radio>
                        </RadioGroup>
                        <Input />&nbsp;&nbsp;月未消费
                    </div>
                </div>

                <div className='search-controller'>
                    <div className='block'>
                        <div className='label'>消费次数: </div>
                        <RadioGroup onChange={this.onChange} value={this.state.type}>
                            <Radio value="0">全部</Radio>
                            <Radio value="1">1次以内</Radio>
                            <Radio value="2">2次以内</Radio>
                            <Radio value="3">3次以内</Radio>
                            <Radio value="4">自定义</Radio>
                        </RadioGroup>
                        <Input />&nbsp;&nbsp;次以内
                    </div>
                </div>

                <div className='search-controller'>
                    <div className='block'>
                        <div className='label'>会员类型: </div>
                        <Select>
                            <Option value="1">所有会员</Option>
                            <Option value="2">新会员</Option>
                            <Option value="3">活跃会员</Option>
                            <Option value="4">沉睡会员</Option>
                        </Select>
                    </div>
                </div>

                <div className='search-controller'>
                    <div className='block'>
                        <div className='label'>归属门店: </div>
                        <Select>
                            <Option value="1">全部</Option>
                            <Option value="2">总部</Option>
                            <Option value="3">平台</Option>
                        </Select>
                    </div>
                </div>
                <div className='search-controller'>
                    <div className='block'>
                        <div className='label'>营销顾问: </div>
                        <Select>
                            <Option value="1">全部</Option>
                            <Option value="2">无</Option>
                        </Select>
                    </div>
                </div>

                <MemberListTable></MemberListTable>
            </div>
        )
    }
}

export default MemberList
