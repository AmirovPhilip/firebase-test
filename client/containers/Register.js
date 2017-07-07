import React from 'react';
import { Row, Col, Button, Input, Icon, ProgressBar } from 'react-materialize'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect, withRouter, Link } from 'react-router-dom'

import * as user from '../redux/actions/user';

class Register extends React.Component {

    constructor(props, context){
        super(props, context);
        this.createUserAction = this.createUserAction.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.state = {
            passwordIcon: 'security',
            passwordRepeatIcon: 'security',
        }
    }

    createUserAction(){
        let userName = document.getElementById('user-name');
        let email = document.getElementById('email');
        let password = document.getElementById('password');

        if(!$(userName).is('.invalid') && !$(email).is('.invalid') && !$(password).is('.invalid')) {
            this.props.actionsUser.createNewUser(userName.value, email.value, password.value);
            document.getElementById('user-name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('password').value = '';
        }
    }

    changeHandler(e){
        if($(e.target).is('#password') && e.target.value.length > 5){
            this.setState({  passwordIcon: 'verified_user' });
        } else if($(e.target).is('#password') && e.target.value.length <= 5){
            this.setState({  passwordIcon: 'security' });
        }
    }

    render() {

        const { login, loading } = this.props.user;

        if(login) {
            return <Redirect push to='/'/>;
        }

        const loginJSX = (
            <Row>
                <h5>REGISTER</h5>
                <Input label="User Name"
                       id="user-name"
                       s={12}
                       validate
                ><Icon>account_circle</Icon></Input>
                <Input type="email"
                       label="Email"
                       id="email"
                       s={12}
                       validate
                ><Icon>email</Icon></Input>
                <Input type="password"
                       label="Password"
                       id="password"
                       s={12}
                       validate
                       onChange={this.changeHandler}
                ><Icon>{this.state.passwordIcon}</Icon></Input>
                <div>
                    <Col s={1}/>
                    <Col s={11}>
                        <Button className="pull-right" onClick={this.createUserAction}>Create an account</Button>
                    </Col>
                    <Col s={1}/>
                    <Col s={11}>
                        <div className="word-or">or</div>
                    </Col>
                    <Col s={1}/>
                    <Col s={11}>
                        <div className="sign-in-link">
                            <Link to="/login">Sign In</Link>
                        </div>
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
)(Register));