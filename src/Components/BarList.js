import React from 'react';
import { List, Segment, Header, Modal, Icon } from 'semantic-ui-react';

const BarList = () => {
  const tripPlaces = ['bar 1', 'bar 2', 'bar 3']

  return(
    <Segment raised>
      <Header as='h3'><Icon name='thermometer three quarters'/></Header>
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

export default BarList;
