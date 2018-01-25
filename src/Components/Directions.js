import React, {Component} from 'react';
import { List, Segment, Header, Icon, Card, Button } from 'semantic-ui-react';

const Directions = ({trips, restart, onJourney}) => {
  const tripsToLoops = onJourney ? trips.slice(1,trips.length) : trips
  return(
    <Segment raised style={{height: `500px`}}>
      <Header as='h3'><Icon name='thermometer full'/></Header>
      <Card centered raised>
        <Card.Content>
          <Card.Header></Card.Header>
          <Card.Description as='h4'>
            <Icon name='address book'/> {tripsToLoops[0].address}
          </Card.Description>
          <Card.Description as='h5'>
            <Icon name='money'/>Price Level: {tripsToLoops[0].price_level}
          </Card.Description>
          <Card.Description as='h5'>
            <Icon name='star half empty'/>Rating: {tripsToLoops[0].rating}
          </Card.Description>
        </Card.Content>
      </Card>
      <Button onClick={() => restart()}>Start new journey</Button>
    </Segment>
  )
}

export default Directions;
