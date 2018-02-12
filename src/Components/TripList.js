import React from 'react';
import { List, Segment, Header, Container, Icon, Button, Label } from 'semantic-ui-react';


const TripList = ({trips, deleteFromTrip, onJourney}) => {
  require("uniq")(trips)
  const tripsToLoop = onJourney ? trips.slice(1,trips.length) : trips
  return(
    <Segment style={{height: `215px`}} inverted color='red'>
      {trips.length !== 0 ? <Header as='h3'>Trip Itenary</Header> : <Header as='h2'>Add Bars To Your Trip From The List Below</Header>}
      <Container raised style={{height: `150px`, overflowY: 'scroll'}}>
        {tripsToLoop.map((bar, i) => <Segment
          key={bar.place_id}
          clearing>
          {!onJourney ? <Button
            onClick={()=> deleteFromTrip(bar.id)}
            floated='left'
            circular size='mini'
            basic color='red'>
            <Icon
              floated='left'
              name='delete'/>
          </Button> :
          <Label as='h3' color='blue' ribbon>{i + 1}</Label>}
          {bar.name}
        </Segment>)}
      </Container>
    </Segment>
  )
};

export default TripList;
