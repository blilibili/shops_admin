import React , {Component} from 'react'
import {Tabs} from "zent";
import CashOutConfig from './cashOut/index'
import Collection from './collection/index'
import PayConfig from './payConfig/index'
const TabPanel = Tabs.TabPanel;
class ArticleManage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            activeId: '1'
        }
    }

    render(){
        return(
            <div>
                <Tabs
                    activeId={this.state.activeId}
                    onChange={this.onTabChange}
                >
                    <TabPanel
                        tab={<span>收款设置</span>}
                        id="1"
                    >
                        <Collection></Collection>
                    </TabPanel>
                    <TabPanel
                        tab="付款设置"
                        id="2"
                    >
                        <PayConfig></PayConfig>
                    </TabPanel>
                    <TabPanel
                        tab="提现设置"
                        id="3"
                    >
                        <CashOutConfig></CashOutConfig>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default ArticleManage