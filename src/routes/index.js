import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import HomePage from '../views/HomePage';
import ErrorPage from '../views/ErrorPage';

export default (
    <Router history={hashHistory}>
        <Route path="/" exact component={HomePage}/>
        <Route path="/*" component={ErrorPage} />
    </Router>
);