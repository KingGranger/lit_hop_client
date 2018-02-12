import React from 'react';
import { Dropdown, Container, Header, Segment, Icon } from 'semantic-ui-react'


const BarFilter = ({bars, filterBars}) => {
  const filters = [].concat.apply([], bars.map(bar => bar.types))
  require('uniq')(filters)
  const filter = filters.map(f =>{
    return {key: `${f.replace(/_/g, " ")}`, value: `${f.replace(/_/g, " ")}`, text: `${f.replace(/_/g, " ")}`}
  })
  return (
    <div>
      <Container >
        <Segment textAlign='center' raised inverted color='red'>
          <Header as='h2' textAlign='center'>
            <Icon name='cocktail' />
            <Header.Content>Bar Filter</Header.Content>
          </Header>
          <Dropdown placeholder='Choose attributes to filter by' multiple search selection options={filter} onChange={(e, data) => filterBars(e, data)}/>
        </Segment>
      </Container>
    </div>
  )
};

export default BarFilter
