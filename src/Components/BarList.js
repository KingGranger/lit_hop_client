import React from 'react';
import { List, Segment, Header, Modal, Icon, Card, Button } from 'semantic-ui-react';



const BarList = ({bars, showInfo, toggleInfo, currentBar}) => {

  return(
    <Segment raised style={{height: `500px`, overflow: 'scroll'}} >
      <Header as='h3'><Icon name='thermometer three quarters'/></Header>
      {!showInfo ? <List ordered>
        {bars.map(bar => {
          return  <Segment key={bar.place_id}>
                    <List.Item key={bar.place_id} onClick={() => toggleInfo(bar.id)}>{bar.name}</List.Item>
                  </Segment>})}
      </List> :
      <div>
        {bars.find(bar => bar.id === currentBar).name}
        <Button onClick={() => toggleInfo(0)}>Show list</Button>
      </div>}
    </Segment>
  )
};

export default BarList;
