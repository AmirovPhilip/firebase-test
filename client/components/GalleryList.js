import React from 'react';
import { Row, Col, Card, Button, Icon, CardTitle } from 'react-materialize'
import { Link } from 'react-router-dom'


import ItemList from './ItemList'

export default class GalleryList extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        const _this = this;

        const listArticles = (
            <div>
                {
                    this.props.articlesData.map((data, index)=> {
                        return (
                            <ItemList data={data} key={index}/>
                        )
                    })
                }
            </div>
        )

        return (
            <Row>
                {listArticles}
            </Row>
        );

    }
}
