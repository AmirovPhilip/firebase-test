import React from 'react';
import { Card, CardTitle, Row, Col } from 'react-materialize'
import { Redirect, withRouter, Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as articles from '../redux/actions/articles';

class Article extends React.Component {

    constructor(props, context){
        super(props, context);
    }

    render() {
        const { login } = this.props.user;
        const { currentArticle } = this.props.articles;

        if(!login){
            return <Redirect push to='/login'/>;
        }

        return (
            <div>

                <div className="container">

                    <Row className="article-main">
                        <Col s={12}>
                            <h5>{currentArticle.title}</h5>
                            <h6>{currentArticle.description}</h6>
                        </Col>
                        <Col s={12}>
                            <br/>
                            <br/>
                            <br/>
                            <div className="img-wrap">
                                <img src={currentArticle.imageUrl} alt=""/>
                            </div>
                            <p>
                                {currentArticle.text}
                            </p>
                        </Col>
                    </Row>

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
)(Article));