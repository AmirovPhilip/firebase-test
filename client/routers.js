import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Main from './containers/Main'
import Home from './containers/Home'
import Login from './containers/Login'
import Register from './containers/Register'
import Article from './containers/Article'
import NotFound from './components/NotFound'

export default (
    <Main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/article' exact component={Article}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <Route path='*' component={NotFound}/>
        </Switch>
    </Main>
);
