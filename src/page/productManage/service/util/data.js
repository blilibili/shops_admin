import React , {Component} from 'react'
import {Button} from 'zent'
/**
 *  表格数据字段公共js
 **/

const serviceColumns = [{
    title: '服务',
    width: '200px',
    name: 'service',
    textAlign: 'center'
}, {
    title: '分类',
    textAlign: 'center',
    name: 'service_type',
    width: '400px',
}, {
    title: '标签',
    textAlign: 'center',
    name: 'service_tag',
    width: '400px'
}, {
    title: '服务时长',
    textAlign: 'center',
    width: '400px',
    name: 'service_time'
},{
    title: '网店排序',
    textAlign: 'center',
    width: '400px',
    name: 'shops_sort'
}, {
    title: '在售门店',
    textAlign: 'center',
    width: '400px',
    name: 'sail_shops'
}, {
    title: '总销量',
    textAlign: 'center',
    width: '400px',
    name: 'all'
},{
    title: '操作',
    textAlign: 'center',
    width: '400px',
    name: '',
    bodyRender: (data) => {
        return (
            <div>
                <Button>更多</Button>
                <Button type="primary">推广</Button>
                <Button type="primary">编辑</Button>
            </div>
        );
    }
}
]

export {
    serviceColumns
}