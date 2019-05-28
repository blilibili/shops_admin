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
                    <SubMenu title={<span><Icon type="business" />预约</span>} key="book">
                        <MenuItem key="/book/list">预约列表</MenuItem>
                        <MenuItem key="/examine/list">预约审核</MenuItem>
                        <MenuItem key="/book/chart">预约看板</MenuItem>
                    </SubMenu>

                    <SubMenu title={<span><Icon type="business" />订单</span>} key="order">
                        <MenuItem key="/order/list">订单管理</MenuItem>
                        <MenuItem key="/after/list">售后管理</MenuItem>
                        <MenuItem key="/appraise/list">评价管理</MenuItem>
                    </SubMenu>

                    <SubMenu title={<span><Icon type="gift" />商品管理</span>} key="product">
                        <MenuItem key="/product/manage">商品管理</MenuItem>
                        <MenuItem key="/type/manage">类目管理</MenuItem>
                    </SubMenu>

                    <SubMenu title={<span><Icon type="shop-decorate" />会员</span>} key="1-4">
                        <MenuItem key="/member/datanan">会员概况</MenuItem>
                        <MenuItem key="/member/list">会员列表</MenuItem>
                        <MenuItem key="/member/group">会员分组</MenuItem>
                    </SubMenu>

                    <SubMenu title={<span><Icon type="gift" />代理商</span>} key="1-5">
                        <MenuItem key="/agent/manage">代理商管理</MenuItem>
                        <MenuItem key="/server/manage">业务管理</MenuItem>
                        <MenuItem key="/server/config">代理商设置</MenuItem>
                    </SubMenu>

                    <SubMenu title={<span><Icon type="hotline-o" />营销推广</span>} key="1-6">
                        <MenuItem key="/market/tool">营销工具</MenuItem>
                        <MenuItem key="/market/channel">渠道推广</MenuItem>
                        <MenuItem key="/market/message">消息通知</MenuItem>
                        <MenuItem key="/market/interface">渠道接口</MenuItem>
                    </SubMenu>

                    <SubMenu title={<span><Icon type="assess" />财务结算</span>} key="1-7">
                        <MenuItem key="/accounting/cash">快速收银</MenuItem>
                        <MenuItem key="/accounting/cashout">提现处理</MenuItem>
                        <MenuItem key="/accounting/verify">业务对账</MenuItem>
                        <MenuItem key="/accounting/situation">资金概况</MenuItem>
                    </SubMenu>

                    <SubMenu title={<span><Icon type="chart" />数据统计</span>} key="1-8">
                        <MenuItem key="/statistics/base">数据概况</MenuItem>
                        <MenuItem key="/statistics/report">业务报表</MenuItem>
                        <MenuItem key="/statistics/usersreport">用户报表</MenuItem>
                        <MenuItem key="/statistics/analyse">业务分析</MenuItem>
                    </SubMenu>

                    <SubMenu title={<span><Icon type="search" />资料库</span>} key="1-9">
                        <MenuItem key="/library/articleManage">文章管理</MenuItem>
                        <MenuItem key="/library/comment">评论管理</MenuItem>
                        <MenuItem key="/library/statics">数据统计</MenuItem>
                        <MenuItem key="/library/articleConfig">文章设定</MenuItem>
                    </SubMenu>

                    <SubMenu title={<span><Icon type="hr" />店铺管理</span>} key="1-10">
                        <MenuItem key="/storeM/list">店铺列表</MenuItem>
                        <MenuItem key="/storeM/config">店铺设置</MenuItem>
                        <MenuItem key="/storeM/book">预约设置</MenuItem>
                    </SubMenu>

                    <SubMenu title={<span><Icon type="tools-o" />系统设置</span>} key="1-11">
                        <MenuItem key="/system/base">基本设置</MenuItem>
                        <MenuItem key="/system/agent">代理人设置</MenuItem>
                        <MenuItem key="/system/bussiness">交易设置</MenuItem>
                        <MenuItem key="/system/member">会员设置</MenuItem>
                        <MenuItem key="/system/server">交易设置</MenuItem>
                        <MenuItem key="/system/notice">通知模板设置</MenuItem>
                        <MenuItem key="/system/safe">安全中心</MenuItem>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}

export default withRouter(MenuChild);
