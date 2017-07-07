import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card } from 'react-materialize'

import Footer from './PageFooter'

export default class NotFound extends Component{
    render(){

        return (
            <div className="container not-found-page">
                <Row>
                    <Col s="12">
                        <Card className='not-found-card' textClassName='black-text' title='Page not found' actions={[<Link to='/'>Go to home page</Link>]}>
                            Sorry, this page is not found.

                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}