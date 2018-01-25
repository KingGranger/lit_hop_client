import React, { Component } from 'react';
import { Grid, Segment, Button, Popup } from 'semantic-ui-react';


const TripStartButton = ({ startJourney }) => {

  return(
    <Popup position='bottom center' wide trigger={<Button content='Ready to start your Journey?' />} on='click'>
      <Grid divided columns='equal'>
        <Grid.Column>
          <Popup
            trigger={<Button onClick={startJourney} color='green' content='Start' fluid/>}
            content='This will start your trip. At any if you wish to change the trip or have had too click the on trip options button'
            position='bottom center'
            size='tiny'
            inverted
            />
        </Grid.Column>
        </Grid>
      </Popup>
  )
}

export default TripStartButton;
