import React from 'react';
import { List, Segment, Header, Icon, Card, Button, Dimmer, Loader } from 'semantic-ui-react';



const BarList = ({bars, showInfo, toggleInfo, currentBar, addBarToTrip, filteredBars}) => {

  return(
    <Segment raised style={{height: `500px`, overflowY: 'scroll'}} >
      <Header as='h3'><Icon name='thermometer empty'/></Header>
      {!showInfo ? <List ordered>
        {bars.length === 0 ? <Dimmer active inverted style={{marginTop: `50px`}}>
                                <Loader>Loading</Loader>
                              </Dimmer> :
          filteredBars.length === 0 ? bars.map(bar => {
          return  <Segment key={bar.place_id}>
                    <List.Item key={bar.place_id} onClick={() => toggleInfo(bar.id)}>{bar.name}</List.Item>
                  </Segment>}):
                filteredBars.map(bar => {
                  return  <Segment key={bar.place_id}>
                            <List.Item key={bar.place_id} onClick={() => toggleInfo(bar.id)}>{bar.name}</List.Item>
                          </Segment>}) }
      </List> :
      <Card centered raised>
        <Card.Content>
          <Card.Header>{bars.find(bar => bar.id === currentBar).name}</Card.Header>
          <Card.Description as='h4'>
            <Icon name='address book'/>{bars.find(bar => bar.id === currentBar).address}
          </Card.Description>
          <Card.Description as='h5'>
            <Icon name='money'/>Price Level: {bars.find(bar => bar.id === currentBar).price_level}
          </Card.Description>
          <Card.Description as='h5'>
            <Icon name='star half empty'/>Rating: {bars.find(bar => bar.id === currentBar).rating}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green' onClick={() => addBarToTrip(bars.find(bar => bar.id === currentBar))}><Icon name='add'/>Add to Trip!</Button>
            <Button basic color='red' onClick={() => toggleInfo(0)}><Icon name='list'/>Show list</Button>
          </div>
        </Card.Content>
      </Card>}
    </Segment>
  )
};

export default BarList;
