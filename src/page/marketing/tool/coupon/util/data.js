import React , {Component} from 'react'
import {Button} from 'zent'
/**
 *  表格数据字段公共js
 **/

const CouponListColumns = [{
    title: '到店人',
    width: '200px',
    name: 'arrival',
    textAlign: 'center'
}, {
    title: '预约内容',
    textAlign: 'center',
    name: 'book_content',
    width: '400px',
}, {
    title: '手艺人',
    textAlign: 'center',
    name: 'view_num',
    width: '400px'
}, {
    title: '预约到店时间',
    textAlign: 'center',
    width: '400px',
    name: 'praise_num'
},{
    title: '上次服务时间',
    textAlign: 'center',
    width: '400px',
    name: 'last_time'
}, {
    title: '下单时间',
    textAlign: 'center',
    width: '400px',
    name: 'create_time'
}, {
    title: '下单人',
    textAlign: 'center',
    width: '400px',
    name: 'createor'
}, {
    title: '预约门店',
    textAlign: 'center',
    width: '400px',
    name: 'book_address'
}, {
    title: '备注',
    textAlign: 'center',
    width: '400px',
    name: 'command'
},{
    title: '操作',
    textAlign: 'center',
    width: '400px',
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
]

export {
    CouponListColumns
}