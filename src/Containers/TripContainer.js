import React, { Component } from 'react';
import { connect } from 'react-redux';
import api from '../AuthAdapter/api';
import * as actions from '../actions';
import { Grid, Segment, Button, Popup } from 'semantic-ui-react';
import TripList from '../Components/TripList';
import TripStartButton from '../Components/TripStartButton';
import NextButton from '../Components/nextButton'

class TripContainer extends Component {

  deleteFromTrip = (Id) => {
    this.props.removeBar(Id)
  }

  startJourney = () => {
    if(this.props.trips.length !== 0){
      this.props.setJourney(this.props.trips[0].address, this.props.trips[this.props.trips.length-1].address, this.props.trips)
      this.props.beginJourney(this.props.position)
    } else {
      alert('Must add bars to the trip itenary before you start your journey')
    }
  }

  next = () => {
    this.props.nextStop()
  }

  render(){
    return(
      <div className='trip-row'>
        <Grid>
          <Grid.Column width={13}><TripList
            onJourney={this.props.onJourney}
            deleteFromTrip={this.deleteFromTrip}
            trips={this.props.trips}/>
          </Grid.Column>
          <Grid.Column width={3}>
            {!this.props.onJourney ? <TripStartButton startJourney={this.startJourney}/> :
            <NextButton
              trips={this.props.trips ? this.props.trips : []}
              next={this.next}/>}
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
