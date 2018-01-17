import React, { Component } from 'react';
import './App.css'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Login from './Components/Login'
import Signup from './Components/Signup'
import NavBar from './Components/NavBar'
import { connect } from 'react-redux';
import Home from './Containers/Home'
import * as actions from './actions/index'


class App extends Component {

  // componentDidMount = () => {
  //   if (localStorage.getItem('token')){
  //     this.props.fetchUser()
  //   }
  // }

  render() {
    return (
      <div className="App" >
        <NavBar logout={this.props.logoutUser}
          history={this.props.history}
          loggedIn={this.props.loggedIn}
          username={this.props.auth.currentUser.username}/>

        <Switch>
          <Route exact path='/' />
          <Route path='/Login' component={Login}/>
          <Route path='/Signup' component={Signup}/>
          <Route path='/home' component={Home}/>
        </Switch>

      </div>
    );
  }
}

  const mapStateToProps = (state) => {
    return {...state, loggedIn: !!state.auth.currentUser.id}
  }

export default withRouter(connect(mapStateToProps, actions)(App));
