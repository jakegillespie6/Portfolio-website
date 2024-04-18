import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Landing from './Landing'
import Nav from './Nav';
const Dashboard = () => <h2>Dashboard</h2>
const surveyNew = () => <h2>Survey</h2>


class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render () {
    return (
        <div >
            <BrowserRouter>
            <div>
                <Nav/>
                <Route exact path="/" component = {Landing} />
                <Route path="/surveys" component = {surveyNew} />
                <Route path="/surveys/Dashboard" component = {Dashboard} />
            </div>
            </BrowserRouter>
        </div>
    )
    }
}

export default connect(null, actions)(App);