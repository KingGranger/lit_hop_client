import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Login from './Components/Login'


class App extends Component {
  render() {
    return (
      <div className="App">

        <Login />
        
      </div>
    );
  }
}

export default App;
