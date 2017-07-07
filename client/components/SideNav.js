import React from 'react';
import {SideNavItem, SideNav, Button, Icon} from 'react-materialize'
import { Link } from 'react-router-dom'



export default class SidebarNav extends React.Component {
    render() {
        return (

            <SideNav
                trigger={this.props.trigger}
                options={{ closeOnClick: true }}
            >

                <SideNavItem userView
                             user={{
                                background: './client/img/navBarBg.jpg',
                                image: this.props.ava,
                                name: this.props.name,
                                email: this.props.email
                            }}
                />
                <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
                <SideNavItem href='#!second'>Second Link</SideNavItem>
                <SideNavItem divider />
                <SideNavItem subheader>Subheader</SideNavItem>
                <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>

            </SideNav>

        )
    }
}
