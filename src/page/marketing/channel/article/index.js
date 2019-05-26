import React , {Component} from 'react';
import { Card , Table , Button } from 'zent';
import {anotherSelect, selectBook} from "@/actions";
import {requestGetArticleList} from '@/service/article/article'
import {withRouter} from 'react-router-dom';

const datasets = [{
    item_id: '5024217',
    bro_uvpv: '1/10',
    stock_num: '60',
    sold_num: 0,
}, {
    item_id: '5024277',
    bro_uvpv: '0/0',
    stock_num: 59,
    sold_num: 0,
}, {
    item_id: '13213123',
    bro_uvpv: '0/0',
    stock_num: 159,
    sold_num: 0,
}];

const columns = [{
    title: '文章标题',
    width: '200px',
    name: 'title',
    textAlign: 'center'
    // bodyRender: (data) => {
    //     return (
    //         <div>{data.title}</div>
    //     );
    // }
}, {
    title: '封面图',
    textAlign: 'center',
    name: 'cover',
    width: '400px',
}, {
    title: '浏览量',
    textAlign: 'center',
    name: 'view_num',
    width: '400px'
}, {
    title: '点赞数',
    textAlign: 'center',
    width: '400px',
    name: 'praise_num'
}, {
    title: '操作',
    textAlign: 'center',
    width: '',
    name: '',
    bodyRender: (data) => {
        return (
            <div>
                <Button type="primary">编辑</Button>
                <Button type="danger">删除</Button>
            </div>
        );
    }
}
];

class ArticleIndex extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            articleList: []
        }
    }
    addNewArticle(){
        this.props.history.push('/article/add')
    }
    componentDidMount(){
        requestGetArticleList().then((res) => {
            this.setState({
                articleList: res.data
            })
        })
    }
    render(){
        return (
            <div>
                <div style={{marginBottom: '20px'}}>
                    <Button type="primary" onClick={() => this.addNewArticle()}>新增文章</Button>
                </div>
                <Card bodyStyle={{padding: 0}} style={{ width: 95+'%' }} title="文章列表">
                    <Table
                        columns={columns}
                        pageInfo={null}
                        datasets={this.state.articleList}
                        rowKey="item_id"
                    />
                </Card>
            </div>
        )
    }
}


export default withRouter(ArticleIndex)
