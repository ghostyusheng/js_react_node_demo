import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDom from 'react-dom';
import { Route, HashRouter, hashHistory, IndexRoute } from 'react-router-dom'
import Test from './components/Test'
import 'antd/dist/antd.min.css';

//import axios from 'axios';


class App extends Component {
    render() {
        return (
            <div class="main">
                app
            </div>
        );
    }
}

class About extends Component {
    render() {
        return (
            <div class="main">
                about
            </div>
        );
    }
}

class Users extends Component {
    render() {
        return (
            <div class="main">
                users
            </div>
        );
    }
}

class User extends Component {
    render() {
        return (
            <div class="main">
                user
            </div>
        );
    }
}

class NoMatch extends Component {
    render() {
        return (
            <div class="main">
                打底页
            </div>
        );
    }
}

render((
  <HashRouter>
     <Route path='/cc' component={Test} />
     <Route path='/aa' component={User} />
     <Route path='/bb' component={About} />
  </HashRouter>
), document.getElementById('root'))
