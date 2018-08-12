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
import TripContainer from '../Containers/TripContainer';
import api from '../AuthAdapter/api';
import { JourneyMap } from '../Components/JourneyMap';
import Directions from '../Components/Directions';


class Home extends Component {
  
  componentDidMount = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.props.setLocation(position.coords.latitude, position.coords.longitude)
        });
    }
  }

  filterBars = (e, filter) => {
      // console.log('filter', filter.value, this.props.bars.bars)
      this.props.setFilter(filter.value, this.props.bars.bars)
      // z = _.intersection(arr1, arr2)
  }

  restart = () => {
    this.props.restartTrip()
  }

  render(){
    console.log('home props', this.props)

    return(
      <div className='row'>
        <Segment >
          <Row>
            <Col s={12} m={8}><TripContainer /></Col>
            <Col s={12} m={4}><BarFilter
              bars={this.props.bars.bars? this.props.bars.bars : []}
              filterBars={this.filterBars}/></Col>
          </Row>
          <Row>
            <Col s={6} >{!this.props.onJourney ? <BarList
              addBarToTrip={this.addBarToTrip}
              currentBar={this.props.currentBarId}
              toggleInfo={this.toggleInfo}
              showInfo={this.props.showInfo.showInfo}
              bars={this.props.bars.bars? this.props.bars.bars : []}
              filteredBars={this.props.filteredBars}/> :
              <Directions
                onJourney={this.props.onJourney}
                restart={this.restart}
                trips={this.props.trips}/>}</Col>
            <Col s={6}>{!this.props.onJourney ?
                <MyMapComponent
              currentBar={this.props.currentBarId}
              toggleInfo={this.toggleInfo}
              showInfo={this.props.showInfo.showInfo}
              bars={this.props.bars.bars? this.props.bars.bars : []}
              position={this.props.position}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCQh-ANCsLGqwp1ETq1eSj55pUo0Rd48dg&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{height: `500px`}}/>}
              mapElement={<div style={{height: `100%`, width: `100%`}}/>}
              />
            : <JourneyMap
              trips={this.props.trips}
              startPosition={this.props.position}/>}
            </Col>
          </Row>
          <Row>
            <Col s={1}/>
            <Col s={10}><LitMeter
              trips={this.props.trips}/></Col>
            <Col s={1}/>
          </Row>
        </Segment>
      </div>
    )
  }
};

const mapStateToProps = state => {

  return {...state}
}

export default connect(mapStateToProps, actions)(withAuth(Home));
