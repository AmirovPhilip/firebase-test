import React from 'react';
import {Row, Col, Button, Icon} from 'react-materialize'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom'

import GalleryList from '../components/GalleryList'
import ModalNewArticle from '../components/ModalNewArticle'

import * as articles from '../redux/actions/articles';

class Home extends React.Component {

    constructor(props, context){
        super(props, context);
        this.addArticleDispatch = this.addArticleDispatch.bind(this);
    }

    addArticleDispatch(data){
        this.props.actionsArticles.addArticle(data);
    }

    componentWillMount(){
        const { login } = this.props.user;
        if(login){
            this.props.actionsArticles.getArticleFromServer();
        }
    }

    render() {
        const { articlesArr } = this.props.articles;
        const { login } = this.props.user;

        if(!login){
            return <Redirect push to='/login'/>;
        }

        return (
            <div>
                <div className="container">
                    <Row>
                        <Col s="12">
                            <h2>Articles</h2>
                        </Col>
                        <Col s="12" className="clearfix">
                            <div className="pull-right">
                                <ModalNewArticle addArticle={this.addArticleDispatch}/>
                            </div>
                        </Col>
                    </Row>

                    <GalleryList articlesData={articlesArr}/>

                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        articles: state.articles
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actionsArticles: bindActionCreators(articles, dispatch)
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Home));
