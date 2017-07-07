import React from 'react';
import { Row, Col, Button, Input, Icon, ProgressBar } from 'react-materialize'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect, withRouter, Link } from 'react-router-dom'

import * as user from '../redux/actions/user';

class Login extends React.Component {

    constructor(props, context){
        super(props, context);
        this.logInAction = this.logInAction.bind(this);
    }

    logInAction(type){
        if(type === 'google'){
            this.props.actionsUser.logInWithGoogle();
        } else {
            let email = document.getElementById('email').value;
            let password = document.getElementById('password').value;
            if(email && password) {
                this.props.actionsUser.logInUser(email, password);
                document.getElementById('email').value = '';
                document.getElementById('password').value = '';
            }
        }
    }

    render() {

        const { login, loading } = this.props.user;

        if(login) {
            return <Redirect push to='/'/>;
        }

        const loginJSX = (
            <Row>
                <h5>SIGN IN</h5>
                <br/>
                <Col s={1}/>
                <Col s={11}>
                    <Button onClick={this.logInAction.bind(event, 'google')}
                            className="google">Log In With Google<Icon left>email</Icon></Button>
                </Col>
                <Col s={1}/>
                <Col s={11}><div className="word-or">or</div></Col>
                <Input type="email"
                       label="Email"
                       id="email"
                       s={12}
                ><Icon>email</Icon></Input>
                <Input type="password"
                       label="password"
                       id="password"
                       s={12}
                ><Icon>security</Icon></Input>
                <div>
                    <Col s={1}/>
                    <Col s={4}>
                        <Button onClick={this.logInAction}>Sign In</Button>
                    </Col>
                    <Col s={1}/>
                    <Col s={6}>
                        <Link to="/register"><Button className="default pull-right">Create an account</Button></Link>
                    </Col>
                </div>
            </Row>
        )

        const preloader = (
            <Row>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <ProgressBar />
            </Row>
        )

        return (
            <div>

                <div className="container">

                    <Row>
                        <Col s="4"/>
                        <Col s="4">
                            <div className="login-form">
                                { !loading ? loginJSX : preloader}
                            </div>
                        </Col>
                    </Row>

                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actionsUser: bindActionCreators(user, dispatch)
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Login));