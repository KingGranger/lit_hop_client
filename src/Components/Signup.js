import React, { Component } from 'react';
import { Form, Button, Segment, Icon, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Signup extends Component {
  state = {
    username: '',
    age: '',
    password: '',
    // errors: {},
    // isLoading: false
  }

  handleChange = (e) => {this.setState({[e.target.name]: e.target.value})}

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createUser(this.state)
  }


  render(){
    console.log('state: ', this.state)
    const { errors, isLoading, username, age, password } = this.state
    return (
      <div>
        <Segment inverted color='red'>
          <Container >
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label>Username</label>
                <input type='text' placeholder='username' name='username' value={username} onChange={this.handleChange} />
              </Form.Field>
              <Form.Field>
                <label>Age</label>
                <input type='number' placeholder='age minimum is 21' name='age' value={age} onChange={this.handleChange} />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input type='password' placeholder='password' name='password' value={password} onChange={this.handleChange} />
              </Form.Field>
              <Form.Field>
                <Button type='submit' animated='fade' color='blue' disabled={isLoading}>
                  <Button.Content visible>Sign Up!</Button.Content>
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

export default connect(mapStateToProps, actions)(Signup)
