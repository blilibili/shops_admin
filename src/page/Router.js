import React , {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import ContentIndex from './home/index'

import BookChart from "./book/chart"
import BookList from './book/list'
import examineList from './book/examine'

import ProductManage from './productManage/productManage'
import TypeManage from './productManage/typeManage/typeManage'

import OrderList from './order/list'
import AfterList from './order/after'
import AppraiseList from './order/appraise'

import MemberDataAna from './member/memeberDataAna/index'
import MemberList from './member/memberList/memberList'
import MemberGroup from './member/memberGroup/memberGroup'

import AgentManageIndex from './agent/agentManage/index'
import ServerManage from './agent/serverMange/index'
import AgentConfig from './agent/serverConfig/index'

import MarketingTools from './marketing/tool/index'
import MarketingChannel from './marketing/channel/index'
import AddArticle from './marketing/channel/article/page/addArticle'
import MessageManage from './marketing/message/index'
import InterfaceManage from './marketing/interface/index'

import QuickCash from './financialAccounting/cashier/index'
import CashOut from './financialAccounting/cashout/index'
import ServerVerify from './financialAccounting/verify/index'
import MoneySituation from './financialAccounting/situation/index'

import StatisticsBase from './statistics/dataBase/index'
import StatisticsReport from './statistics/report/index'
import StatisticsUserReport from './statistics/usersReport/index'
import StatisticsAnalyse from './statistics/analyse/index'

import LibArticleConfig from './library/articleConfig'
import LibArticleManage from './library/articleManage'
import LibCommentManage from './library/commentManage'
import LibStatics from './library/statistics'

import StoreList from './storeManage/list/index'
import StoreConfig from './storeManage/config/index'
import StoreBookConfig from './storeManage/bookConfig/index'

import SystemBaseConfig from './system/base/index'
import SystemAgentConfig from './system/agentConfig/index'
import SystemBussinessConfig from './system/bussinessConfig/index'
import SystemMemberConfig from './system/memberConfig/index'
import SystemNoticeTemplate from './system/noticeTemplateConfig/index'
import SystemSafeCenter from './system/safeCenter/index'
import SystemServerConfig from './system/serverConfig/index'

import Test from "./home/test";

class ReactRouter extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" component={ContentIndex}/>
                <Route path="/test" component={Test}/>
                <Route path="/article/add" component={AddArticle}/>

                <Route path="/order/list" component={OrderList}/>
                <Route path="/book/list" component={BookList}/>
                <Route path="/book/chart" component={BookChart}/>
                <Route path="/examine/list" component={examineList}/>

                <Route path="/product/manage" component={ProductManage}/>
                <Route path="/type/manage" component={TypeManage}/>

                <Route path="/after/list" component={AfterList}/>
                <Route path="/appraise/list" component={AppraiseList}/>

                <Route path="/member/datanan" component={MemberDataAna}/>
                <Route path="/member/list" component={MemberList}/>
                <Route path="/member/group" component={MemberGroup}/>

                <Route path="/agent/manage" component={AgentManageIndex}/>
                <Route path="/server/manage" component={ServerManage}/>
                <Route path="/server/config" component={AgentConfig}/>

                <Route path="/market/tool" component={MarketingTools}/>
                <Route path="/market/channel" component={MarketingChannel}/>
                <Route path="/market/message" component={MessageManage}/>
                <Route path="/market/interface" component={InterfaceManage}/>

                <Route path="/accounting/cash" component={QuickCash}/>
                <Route path="/accounting/cashout" component={CashOut}/>
                <Route path="/accounting/verify" component={ServerVerify}/>
                <Route path="/accounting/situation" component={MoneySituation}/>

                <Route path="/statistics/base" component={StatisticsBase}/>
                <Route path="/statistics/report" component={StatisticsReport}/>
                <Route path="/statistics/usersreport" component={StatisticsUserReport}/>
                <Route path="/statistics/analyse" component={StatisticsAnalyse}/>

                <Route path="/library/articleConfig" component={LibArticleConfig}/>
                <Route path="/library/articleManage" component={LibArticleManage}/>
                <Route path="/library/comment" component={LibCommentManage}/>
                <Route path="/library/statics" component={LibStatics}/>

                <Route path="/storeM/list" component={StoreList}/>
                <Route path="/storeM/config" component={StoreConfig}/>
                <Route path="/storeM/book" component={StoreBookConfig}/>

                <Route path="/system/base" component={SystemBaseConfig}/>
                <Route path="/system/agent" component={SystemAgentConfig}/>
                <Route path="/system/bussiness" component={SystemBussinessConfig}/>
                <Route path="/system/member" component={SystemMemberConfig}/>
                <Route path="/system/notice" component={SystemNoticeTemplate}/>
                <Route path="/system/safe" component={SystemSafeCenter}/>
                <Route path="/system/server" component={SystemServerConfig}/>
            </Switch>
        )
    }
}

export default ReactRouter
