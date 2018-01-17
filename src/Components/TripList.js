import React from 'react';
import { List, Segment, Header, Modal } from 'semantic-ui-react';

const TripList = () => {
  const tripPlaces = ['bar 1', 'bar 2', 'bar 3']

  return(
    <Segment raised>
      <Header as='h3'>Trip Itenary</Header>
      <List ordered>
        {tripPlaces.map(bar => {
          return <Modal trigger={<List.Item>{bar}</List.Item>}>
            <Modal.Content>hey this is {bar}</Modal.Content>
          </Modal>
        })}
      </List>
    </Segment>
  )
};

export default TripList;
