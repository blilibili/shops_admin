import React , {Component} from 'react'
import {Tabs, Table, Card, Button, DateRangePicker, Select, Input} from 'zent';
import {serviceColumns} from "./util/data";
import './service.scss'
const TabPanel = Tabs.TabPanel;
const Option = Select.Option;
const initData = [
    {
        service: 'HPV \n ¥7800',
        service_type: 'HPV注射服務',
        service_tag: 'HPV',
        service_time: '15分钟',
        shops_sort: '0',
        sail_shops: '20',
        all: '2366'
    }
]
class ServiceList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            activeId: '1',
            datasets: initData
        }
    }
    onTabChange = (id) => {
        if(id == 2){
            this.setState({
                datasets: [],
                activeId: id
            })

        }else{
            this.setState({
                datasets: initData,
                activeId: id
            })
        }
    }
    render(){
        return (
            <div className="service-list-page">
                <div style={{marginBottom: '10px'}}>
                    <Button type='primary'>添加服务</Button>
                    <Button>批量操作</Button>
                    <Button>管理分类</Button>
                    <Button>管理标签</Button>
                </div>
                <div style={{marginBottom: '10px' , display: 'flex' , justifyContent: 'space-between'}}>
                    <div style={{display: 'flex'}}>
                        <div className='block'>
                            <div className='label'>选择分类: </div>
                            <Select>
                                <Option value="1">所有分类</Option>
                                <Option value="2">HPV注射服务</Option>
                                <Option value="3">脱毛</Option>
                                <Option value="3">美容疗程</Option>
                                <Option value="3">无痛祛鼻鼾</Option>
                                <Option value="3">私密护理</Option>
                            </Select>
                        </div>

                        <div className='block'>
                            <div className='label'>选择标签: </div>
                            <Select>
                                <Option value="1">所有标签</Option>
                                <Option value="2">HPV</Option>
                            </Select>
                        </div>
                    </div>

                    <div>
                        <div className='block'>
                            <Input style={{marginRight:'10px'}} placeholder="输入名称或条形码" />
                            <Button>搜索</Button>
                        </div>
                    </div>
                </div>
                <Tabs
                    activeId={this.state.activeId}
                    onChange={this.onTabChange}
                >
                    <TabPanel
                        tab={<span>总服务</span>}
                        id="1"
                    >
                        <div>
                            <Table
                                columns={serviceColumns}
                                pageInfo={null}
                                datasets={this.state.datasets}
                                rowKey="item_id"
                            />
                        </div>
                    </TabPanel>
                    <TabPanel
                        tab="门店服务"
                        id="2"
                    >
                        <Table
                            columns={serviceColumns}
                            pageInfo={null}
                            datasets={this.state.datasets}
                            rowKey="item_id"
                        />
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default ServiceList