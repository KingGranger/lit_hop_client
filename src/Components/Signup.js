import React, { Component } from 'react';

export default class Signup Component {
  state = {
    username: '',
    age: 0,
    password: ''
  }

  handleChange = (e) => {this.setState({[e.target.name]: e.target.value})}


  render(){
    return (
      <div>
          <form>
            <input type='text' placeholder='username' name='username' value={this.username}/>
            <input type='text' placeholder='age minimum is 21' name='age' value={this.age}/>
            <input type='password' placeholder='password' name='password' value={this.password}/>
          </form>
      </div>
    )
  }
}
