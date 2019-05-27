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
                        <MenuItem key="/">预约看板</MenuItem>
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
                    <SubMenu title={<span><Icon type="message" />文章</span>} key="1-3">
                        <MenuItem key="/article/index">文章管理</MenuItem>
                    </SubMenu>

                    <SubMenu title={<span><Icon type="shop-decorate" />会员</span>} key="1-4">
                        <MenuItem key="/member/datanan">会员概况</MenuItem>
                        <MenuItem key="/member/list">会员列表</MenuItem>
                        <MenuItem key="/member/group">会员分组</MenuItem>
                    </SubMenu>

                    <SubMenu title={<span><Icon type="shop-decorate" />代理商</span>} key="1-5">
                        <MenuItem key="/agent/manage">代理商管理</MenuItem>
                        <MenuItem key="/server/manage">业务管理</MenuItem>
                        <MenuItem key="/server/config">代理商设置</MenuItem>
                    </SubMenu>

                    <SubMenu title={<span><Icon type="shop-decorate" />营销推广</span>} key="1-6">
                        <MenuItem key="/market/tool">营销工具</MenuItem>
                        <MenuItem key="/market/channel">渠道推广</MenuItem>
                        <MenuItem key="/market/message">消息通知</MenuItem>
                        <MenuItem key="/market/interface">渠道接口</MenuItem>
                    </SubMenu>

                    <SubMenu title={<span><Icon type="shop-decorate" />财务结算</span>} key="1-7">
                        <MenuItem key="/accounting/cash">快速收银</MenuItem>
                        <MenuItem key="/accounting/cashout">提现处理</MenuItem>
                        <MenuItem key="/accounting/verify">业务对账</MenuItem>
                        <MenuItem key="/accounting/situation">资金概况</MenuItem>
                    </SubMenu>

                    <SubMenu title={<span><Icon type="shop-decorate" />数据统计</span>} key="1-8">
                        <MenuItem key="/statistics/base">数据概况</MenuItem>
                        <MenuItem key="/statistics/report">业务报表</MenuItem>
                        <MenuItem key="/statistics/usersreport">用户报表</MenuItem>
                        <MenuItem key="/statistics/analyse">业务分析</MenuItem>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}

export default withRouter(MenuChild);
