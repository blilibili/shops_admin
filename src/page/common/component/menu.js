import React , {Component} from 'react';
import { Menu , Icon } from 'zent';
import { withRouter } from 'react-router-dom';
const { MenuItem, SubMenu } = Menu;

class MenuChild extends React.Component{
    constructor(props){
        super(props)
    }

    onClick = (e , key) => {
        let goToUrl = key
        this.props.history.push(goToUrl)
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
                    onClick={(e , key) => this.onClick(e , key)}
                >
                    <MenuItem key="/">
                        <span><Icon type="flow-o" />工作台</span>
                    </MenuItem>
                    <MenuItem key="/test">
                        <span><Icon type="shop-o" />店铺</span>
                    </MenuItem>
                    <SubMenu title={<span><Icon type="business" />预约管理</span>} key="book">
                        <MenuItem key="/book/list">预约列表</MenuItem>
                    </SubMenu>
                    <SubMenu title={<span><Icon type="message" />文章</span>} key="1-3">
                        <MenuItem key="/article/index">文章管理</MenuItem>
                    </SubMenu>
                    <SubMenu title={<span><Icon type="goods" />商品</span>} key="1-4">
                        <MenuItem key="1-3-1">商品管理</MenuItem>
                        <MenuItem key="1-3-2">店铺分类</MenuItem>
                        <MenuItem key="1-3-3">其他</MenuItem>
                    </SubMenu>
                    <SubMenu title={<span><Icon type="order"/>订单</span>} key="1-5">
                        <MenuItem key="1-4-1">订单管理</MenuItem>
                        <MenuItem key="1-4-2">售后服务</MenuItem>
                    </SubMenu>
                    <SubMenu title={<span><Icon type="shop-decorate" />会员</span>} key="1-6">
                        <MenuItem key="1-5-1">会员管理</MenuItem>
                        <MenuItem key="1-5-2">余额管理</MenuItem>
                    </SubMenu>
                    <SubMenu title={<span><Icon type="business" />分销商</span>} key="1-7">
                        <MenuItem key="1-6-1">分销商管理</MenuItem>
                        <MenuItem key="1-6-2">佣金管理</MenuItem>
                        <MenuItem key="1-6-3">分销设置</MenuItem>
                    </SubMenu>
                    <SubMenu title={<span><Icon type="assess" />营销设置</span>} key="1-8">
                        <MenuItem key="1-7-1">营销渠道</MenuItem>
                        <MenuItem key="1-7-2">素材管理</MenuItem>
                        <MenuItem key="1-7-3">活动宣传</MenuItem>
                        <MenuItem key="1-7-3">开放服务</MenuItem>
                    </SubMenu>
                    <SubMenu title={<span><Icon type="settings" />系统</span>} key="1-9">
                        <MenuItem key="1-8-1">支付设置</MenuItem>
                        <MenuItem key="1-8-2">订单配送</MenuItem>
                        <MenuItem key="1-8-3">其他设置</MenuItem>
                        <MenuItem key="1-8-3">安全中心</MenuItem>
                        <MenuItem key="1-8-3">任务中心</MenuItem>
                    </SubMenu>
                    <SubMenu title={<span><Icon type="chart" />统计</span>} key="1-10">
                        <MenuItem key="1-9-1">销售分析</MenuItem>
                        <MenuItem key="1-9-2">会员分析</MenuItem>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}

export default withRouter(MenuChild);
