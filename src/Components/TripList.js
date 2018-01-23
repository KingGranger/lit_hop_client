import React from 'react';
import { List, Segment, Header, Container, Icon, Button } from 'semantic-ui-react';


const TripList = ({trips, deleteFromTrip}) => {
  require("uniq")(trips)
  return(
    <Segment style={{height: `215px`}}>
      {trips.length !== 0 ? <Header as='h3'>Trip Itenary</Header> : <Header as='h2'>Add Bars To Your Trip From The List Below</Header>}
      <Container raised style={{height: `150px`, overflowY: 'scroll'}}>
        {trips.map((bar, i) => <Segment
          key={bar.place_id}
          clearing>
          <Button
            onClick={()=> deleteFromTrip(bar.id)}
            floated='left'
            circular size='mini'
            basic color='red'>
            <Icon
              floated='left'
              name='delete'/>
          </Button>
          {bar.name}
        </Segment>)}
      </Container>
    </Segment>
  )
};

export default TripList;
