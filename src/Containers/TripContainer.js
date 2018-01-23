import React, { Component } from 'react';
import { connect } from 'react-redux';
import api from '../AuthAdapter/api';
import * as actions from '../actions';
import { Grid, Segment, Button, Popup } from 'semantic-ui-react';
import TripList from '../Components/TripList';
import TripStartButton from '../Components/TripStartButton';

class TripContainer extends Component {

  deleteFromTrip = (Id) => {
    this.props.removeBar(Id)
  }

  startJourney = () => {
    if(this.props.trips.length !== 0){
      this.props.setJourney(this.props.trips[0].address, this.props.trips[this.props.trips.length-1].address, this.props.trips)
      this.props.beginJourney()
    } else {
      alert('Must add bars to the trip itenary before you start your journey')
    }
  }

  render(){
    console.log('trip props', this.props)
    return(
      <div className='trip-row'>
        <Grid>
          <Grid.Column width={13}><TripList
            deleteFromTrip={this.deleteFromTrip}
            trips={this.props.trips}/>
          </Grid.Column>
          <Grid.Column width={3}>
            <TripStartButton startJourney={this.startJourney}/>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {...state}
}

export default connect(mapStateToProps, actions)(TripContainer);
