import React from 'react';
import {Footer} from 'react-materialize'
import { Link } from 'react-router-dom'

export default class PageFooter extends React.Component {
    render() {
        return (

            <Footer copyrights="© 2017 Copyright Text"
                links={
                    <ul>
                        <li><Link className="white-text text-lighten-3" to="#!">Link 1</Link></li>
                        <li><Link className="white-text text-lighten-3" to="#!">Link 2</Link></li>
                        <li><Link className="white-text text-lighten-3" to="#!">Link 3</Link></li>
                        <li><Link className="white-text text-lighten-3" to="#!">Link 4</Link></li>
                    </ul>
                }
                className='main-light-blue'>
                    <h5 className="white-text">Footer Content</h5>
                    <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer
                    content.</p>
            </Footer>

        )
    }
}
