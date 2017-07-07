import React from 'react';
import {Navbar, NavItem, Icon} from 'react-materialize'
import { Link } from 'react-router-dom'

import SidebarNav from './SideNav'

export default class PageHeader extends React.Component {
    render() {

        const nav = (<div>
            <NavItem className="disable">{this.props.email}</NavItem>
            <NavItem href='#'><Icon>search</Icon></NavItem>
            <SidebarNav {...this.props} trigger={
                <NavItem>
                <Icon>account_circle</Icon>
                </NavItem>
                }/>
            <NavItem onClick={this.props.logOut}><Icon>exit_to_app</Icon></NavItem>
        </div>)

        return (

            <Navbar brand={
                        <img className="logo" src="./client/img/logo-react.png" alt="logo"/>
                    }
                    className="main-light-blue" right
            >   {
                this.props.login ? (nav) : ''
            }
            </Navbar>

        )
    }
}
