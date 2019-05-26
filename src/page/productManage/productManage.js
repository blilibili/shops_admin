import React ,{Component} from 'react'
import {Table, Tabs} from "zent";
import {booksColumns} from "../book/util/data";
import CardList from './card/cardList'
import ProductList from './product/productList'
import ServiceList from './service/list'

const TabPanel = Tabs.TabPanel;
class ProductManage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            activeId: '1'
        }
    }
    onTabChange = (id) => {
        this.setState({
            activeId: id
        })
    }
    render(){
        return (
            <div>
                <Tabs
                    activeId={this.state.activeId}
                    onChange={this.onTabChange}
                >
                    <TabPanel
                        tab={<span>服务</span>}
                        id="1"
                    >
                        <ServiceList></ServiceList>
                    </TabPanel>
                    <TabPanel
                        tab="商品"
                        id="2"
                    >
                        <ProductList></ProductList>
                    </TabPanel>
                    <TabPanel
                        tab="卡券"
                        id='3'
                    >
                        <CardList></CardList>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default ProductManage