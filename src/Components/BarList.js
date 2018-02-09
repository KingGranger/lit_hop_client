import React, { Component } from 'react';
import { List, Segment, Header, Icon, Card, Button, Dimmer, Loader } from 'semantic-ui-react';
import BarCard from './BarCard'
import { connect } from 'react-redux';
import * as actions from '../actions';
import api from '../AuthAdapter/api';


const testBars = [{name: 'bar home', id: 1}, {name: 'bar away', id: 2}, {name: 'bar there', id: 3}]
class BarList extends Component{


  toggleInfo = (Id) => {
    console.log('clicked')
    //this.props.setInfo(Id)
  }

  addBarToTrip = (bar) => {
    this.props.addBar(bar)
    this.props.setInfo(0)
  }

  filterBars = (e, filter) => {
      this.props.setFilter(filter.value, this.props.bars.bars)
      // z = _.intersection(arr1, arr2)
  }

  listOfBars = () =>{
    return this.props.bars.bars? this.props.bars.bars : []
  }

  render(){
    console.log('Bar list props', this.props)
    return(
      <Segment raised style={{height: `500px`, overflowY: 'scroll'}} >
        <Header as='h3'><Icon name='thermometer empty'/></Header>
        <List>
          {testBars.map(bar => <Segment><List.Item onClick={() => this.toggleInfo(bar.id)}>
            {bar.name}
          </List.Item></Segment>)}
        </List>
      </Segment>
    )
  }
};

const mapStateToProps = state => {

  return {...state}
}

export default connect(mapStateToProps,actions)(BarList);

// {!this.props.showInfo.showInfo ? <List ordered>
//   {this.listOfBars().length === 0 ? <Dimmer active inverted style={{marginTop: `50px`}}>
//   <Loader>Loading</Loader>
// </Dimmer> :
// this.filteredBars.length === 0 ? this.bars.map(bar => {
//   return  <Segment key={bar.place_id}>
//     <List.Item key={bar.place_id} onClick={() => this.toggleInfo(bar.id)}>{bar.name}</List.Item>
//   </Segment>}):
//   this.filteredBars.map(bar => {
//     return  <Segment key={bar.place_id}>
//       <List.Item key={bar.place_id} onClick={() => this.toggleInfo(bar.id)}>{bar.name}</List.Item>
//     </Segment>}) }
//   </List> :
//   <BarCard/>}
