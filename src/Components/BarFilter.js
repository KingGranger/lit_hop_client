import React from 'react';
import { Dropdown, Container, Header, Segment, Icon } from 'semantic-ui-react'


const BarFilter = () => {
  const bars = [{key: 'bar 1', value: 'bar 1', text: 'bar 1'}, {key: 'bar 2', value: 'bar 2', text: 'bar 2'}, {key: 'bar 3', value: 'bar 3', text: 'bar 3'}]

  return (
    <div>
      <Container >
        <Segment textAlign='center' raised>
          <Header as='h2' textAlign='center'>
            <Icon name='cocktail' />
            <Header.Content>Bar Filter</Header.Content>
          </Header>
          <Dropdown placeholder='Choose attributes to filter by' multiple search selection options={bars} onChange={(e, item)=> {console.log('bar', item.value)}}/>
        </Segment>
      </Container>
    </div>
  )
};

export default BarFilter
