import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as user from '../redux/actions/user';
import { withRouter } from 'react-router-dom'
import { CardPanel } from 'react-materialize'

import Header from './../components/PageHeader'
import Footer from './../components/PageFooter'

import '../css/style.scss'

class Main extends React.Component {

    constructor(props){
        super(props);
        this.logOutAction = this.logOutAction.bind(this);
        this.errorClose = this.errorClose.bind(this);
    }

    logOutAction(){
        this.props.actionsUser.logOutUser();
    }

    errorClose(){
        this.props.actionsUser.hideError();
    }

    componentWillMount(){
        this.props.actionsUser.checkSessionUser();
    }

    render() {

        const errorMessage = this.props.user.error

        const error = errorMessage ? (
          <div className="app-error">
              <CardPanel className="red lighten-4 black-text">
                    <div className="close"><span onClick={this.errorClose}>Close</span></div>
                    <h6>{errorMessage.code}</h6>
                    <span>{errorMessage.message}</span>
              </CardPanel>
          </div>
        ) : '';

        return (
            <div>
                <Header {...this.props.user} logOut={this.logOutAction}/>

                <div className="content-page">
                    {this.props.children}
                </div>

                <Footer/>
                {error}
            </div>);
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
)(Main));