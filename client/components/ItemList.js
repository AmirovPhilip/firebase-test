import React from 'react';
import { Col, Card, CardTitle } from 'react-materialize'
import { Link } from 'react-router-dom'

export default class ItemList extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <Col s={4}>
                <Card className='small'
                      header={<CardTitle image={this.props.data.imageUrl}>{this.props.data.title}</CardTitle>}
                      actions={[<Link to={"/article?id=" + this.props.data.id}>Read more</Link>]}>
                    {this.props.data.description}
                </Card>
            </Col>
        );

    }
}
