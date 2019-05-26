import React , {Component} from 'react'
import {Tabs, Table, Card, Button} from 'zent';
import {booksColumns} from '../util/data'
const TabPanel = Tabs.TabPanel;

const datasets = [{
    arrival: 'daniel.li',
    book_content: '预约内容',
    view_num: 'daniel',
    praise_num: '2019-03-05',
    last_time: '2019-03-05',
    create_time: '2019-03-05',
    createor: 'daniel',
    book_address: '深圳市福田区华强北九方店',
    command: '客人不吸烟'
},{
    arrival: 'test',
    book_content: '预约内容',
    view_num: 'daniel',
    praise_num: '2019-03-05',
    last_time: '2019-03-05',
    create_time: '2019-03-05',
    createor: 'daniel',
    book_address: '深圳市福田区华强北九方店',
    command: '客人不喝酒'
}];

class ExamineTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            activeId: '1',
            datasets: datasets
        }
    }

    onTabChange = (id) => {
        if(id == 2){
            let newData = [
                {
                    arrival: '超市',
                    book_content: '预约内容',
                    view_num: 'daniel',
                    praise_num: '2019-03-05',
                    last_time: '2019-03-05',
                    create_time: '2019-03-05',
                    createor: 'daniel',
                    book_address: '深圳市福田区华强北九方店',
                    command: '预约超时'
                }
            ]
            this.setState({
                datasets: newData,
                activeId: id
            })

        }else{
            this.setState({
                datasets: datasets,
                activeId: id
            })
        }
    }

    render(){
        return (
            <div className='book-table-section'>
                <Tabs
                    activeId={this.state.activeId}
                    onChange={this.onTabChange}
                >
                    <TabPanel
                        tab={<span>待审核预约</span>}
                        id="1"
                    >
                        <div>
                            <Table
                                columns={booksColumns}
                                pageInfo={null}
                                datasets={this.state.datasets}
                                rowKey="item_id"
                            />
                        </div>
                    </TabPanel>
                    <TabPanel
                        tab="审核不通过列表"
                        id="2"
                    >
                        <Table
                            columns={booksColumns}
                            pageInfo={null}
                            datasets={this.state.datasets}
                            rowKey="item_id"
                        />
                    </TabPanel>
                    <TabPanel
                        tab="已审核列表"
                        id='3'
                    >
                        <Table
                            columns={booksColumns}
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

export default ExamineTable