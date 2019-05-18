import React , {Component} from 'react';
import { Menu , Icon } from 'zent';
import { Route, Switch } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
const { MenuItem, SubMenu } = Menu;

const onClick = (e, key) => {
    // let { history } = this.props
    // history.push(key)
    // console.log(e, e.target.getAttribute('data-path') , key);
    console.log(e , key , this)
}

class MenuChild extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let _self = this
        return (
            <div>
                <Menu
                    style={{width:'100%' , height:'100vh'}}
                    mode="inline"
                    defaultSelectedKey="/"
                    defaultExpandKeys={[]}
                    onClick={onClick}
                >
                    <MenuItem key="/">
                        首页
                    </MenuItem>
                    <MenuItem key="/test">
                        预约
                    </MenuItem>
                    <SubMenu title={<span><Icon type="youzan" />订单</span>} key="1-3">
                        <MenuItem key="1-3-1">电视机</MenuItem>
                        <MenuItem key="1-3-2">笔记本</MenuItem>
                        <MenuItem key="1-3-3">洗衣机</MenuItem>
                    </SubMenu>
                    <SubMenu title={"会员"} key="1-4">
                        <MenuItem key="1-4-1">眼影</MenuItem>
                        <MenuItem key="1-4-2">洗面奶</MenuItem>
                        <SubMenu key="1-4-3" title={"食品分类"}>
                            <MenuItem key="1-4-3-1">电视机</MenuItem>
                            <MenuItem key="1-4-3-2">笔记本</MenuItem>
                            <MenuItem key="1-4-3-3">洗衣机</MenuItem>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu title={<span><Icon type="youzan" />代理商</span>} key="1-5">
                        <MenuItem key="1-3-1">电视机</MenuItem>
                        <MenuItem key="1-3-2">笔记本</MenuItem>
                        <MenuItem key="1-3-3">洗衣机</MenuItem>
                    </SubMenu>
                    <SubMenu title={<span><Icon type="youzan" />服务</span>} key="1-6">
                        <MenuItem key="1-3-1">电视机</MenuItem>
                        <MenuItem key="1-3-2">笔记本</MenuItem>
                        <MenuItem key="1-3-3">洗衣机</MenuItem>
                    </SubMenu>
                    <SubMenu title={<span><Icon type="youzan" />店铺</span>} key="1-7">
                        <MenuItem key="1-3-1">电视机</MenuItem>
                        <MenuItem key="1-3-2">笔记本</MenuItem>
                        <MenuItem key="1-3-3">洗衣机</MenuItem>
                    </SubMenu>
                    <SubMenu title={<span><Icon type="youzan" />统计</span>} key="1-8">
                        <MenuItem key="1-3-1">电视机</MenuItem>
                        <MenuItem key="1-3-2">笔记本</MenuItem>
                        <MenuItem key="1-3-3">洗衣机</MenuItem>
                    </SubMenu>
                    <SubMenu title={<span><Icon type="youzan" />系统</span>} key="1-9">
                        <MenuItem key="1-3-1">电视机</MenuItem>
                        <MenuItem key="1-3-2">笔记本</MenuItem>
                        <MenuItem key="1-3-3">洗衣机</MenuItem>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}

export default MenuChild;
