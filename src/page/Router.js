import React , {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import ContentIndex from './home/index'
import ArticleIndex from './article/index'
import AddArticle from './article/page/addArticle'
import BookList from './book/list'
import Test from "./home/test";

class ReactRouter extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" component={ContentIndex}/>
                <Route path="/test" component={Test}/>
                <Route path="/article/index" component={ArticleIndex}/>
                <Route path="/article/add" component={AddArticle}/>
                <Route path="/book/list" component={BookList}/>
            </Switch>
        )
    }
}

export default ReactRouter
