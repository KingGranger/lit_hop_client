import React, { Component } from 'react'
import { Form, Button, Segment, Icon, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {this.setState({[e.target.name]: e.target.value})}

  handleSubmit = (e) =>{
    e.preventDefault()
    this.props.loginUser(this.state, this.props.history)
  }
  render(){
    return(
      <div>
        <Segment inverted color='red'>
          <Container>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label>Username</label>
                <input placeholder='Username'  type='text' name='username' value={this.state.username} onChange={this.handleChange}/>
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input placeholder='Password' type='password' name='password' value={this.state.password} onChange={this.handleChange}/>
              </Form.Field>
              <Form.Field>
                <Button type='submit' animated='fade' color='blue'>
                  <Button.Content visible>Log In!</Button.Content>
                  <Button.Content hidden>
                    <Icon name='fire' size='large' color='orange'/>
                  </Button.Content>
                </Button>
              </Form.Field>
            </Form>
          </Container>
        </Segment>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {...state}
}

export default connect(mapStateToProps, actions)(Login)
