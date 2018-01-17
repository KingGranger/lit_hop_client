import React, { Component } from 'react'
import { MyMapComponent } from '../Components/Map';
import  withAuth  from '../hocs/withAuth';
import { Row, Col } from 'react-materialize';
import { Segment } from 'semantic-ui-react';
import BarFilter from '../Components/BarFilter';
import BarList from '../Components/BarList';
import LitMeter from '../Components/LitMeter';
import { connect } from 'react-redux';
import * as actions from '../actions';
import TripList from '../Components/TripList';
import api from '../AuthAdapter/api'


class Home extends Component {

  componentDidMount = () => {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {

          this.props.setLocation(position.coords.latitude, position.coords.longitude)
        });
    }

  }

  render(){
    console.log('home props', this.props)
    return(
      <div className='row'>
        <Segment inverted color='red'>
          <Row>
            <Col s={8}><TripList /></Col>
            <Col s={4}><BarFilter /></Col>
          </Row>
          <Row>
            <Col s={6}><BarList /></Col>
            <Col s={6}><MyMapComponent
              position={this.props.position}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCQh-ANCsLGqwp1ETq1eSj55pUo0Rd48dg&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{height: `500px`}}/>}
              mapElement={<div style={{height: `100%`, width: `100%`}}/>}
              /></Col>
          </Row>
          <Row>
            <Col s={1}/>
            <Col s={10}><LitMeter/></Col>
            <Col s={1}/>
          </Row>
        </Segment>
      </div>
    )
  }
}

const mapStateToProps = state => {
  // const currentLocation = {
  //   lat: '',
  //   lng: ''
  // }

  return {...state}
}

export default connect(mapStateToProps, actions)(withAuth(Home));
