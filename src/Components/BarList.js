import React, { Component } from 'react';
import { List, Segment, Header, Icon, Card, Button, Dimmer, Loader } from 'semantic-ui-react';
import BarCard from './BarCard'
import { connect } from 'react-redux';
import * as actions from '../actions';
import api from '../AuthAdapter/api';


const testBars = [{name: 'bar home', id: 1}, {name: 'bar away', id: 2}, {name: 'bar there', id: 3}]
class BarList extends Component{


  toggleInfo = (Id) => {
    this.props.setInfo(Id)
  }

  addBarToTrip = (bar) => {
    this.props.addBar(bar)
    this.props.setInfo(0)
  }

  listOfBars = () =>{
    return this.props.bars.bars? this.props.bars.bars : []
  }

  render(){
    console.log('Bar list props', this.props)
    return(
      <Segment inverted color='red' raised style={{height: `500px`, overflowY: 'scroll'}} >
        <Header as='h3'><Icon name='thermometer empty'/></Header>
        {!this.props.showInfo.showInfo ? <List>
          {this.listOfBars().map(bar => <Segment><List.Item onClick={() => this.toggleInfo(bar.id)}>
            {bar.name}
          </List.Item></Segment>)}
        </List> : <BarCard toggleInfo={this.toggleInfo}
          addBarToTrip={this.addBarToTrip}
          currentBar={this.props.currentBar}
          bars={this.listOfBars()}/> }
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
