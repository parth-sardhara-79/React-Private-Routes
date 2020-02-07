import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './login';
import Dashboard from './dashboard';
import PageNotFound from './pagenotfound';
import Auth from './auth';


let PrivateRoute = ({component: Component, ...rest}) =>  {
  let authenticated = Auth.getAuth();
  return (
    <Route
      {...rest}
      render={(props) => authenticated === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

const routing = (<BrowserRouter>
  <Switch>
    <Route exact path="/login" component={Login} />
    <PrivateRoute exact path="/dashboard" component={Dashboard} />
    <Route exact path="/" component={App} />
    <Route path="*" component={PageNotFound} />
  </Switch>
</BrowserRouter>);


ReactDOM.render(routing, document.getElementById('root'));


serviceWorker.unregister();
