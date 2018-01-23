import React, {Component} from 'react';
import {withGoogleMap, GoogleMap, Marker, withScriptjs, InfoWindow} from 'react-google-maps'
import { compose, withProps, withStateHandlers} from 'recompose';

export const MyMapComponent = compose(

  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
  withGoogleMap
  )((props) =>  {
      return (<GoogleMap
    defaultZoom={15}
    center={props.position}
  >
    <Marker
      icon={{ url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' }}
      position={props.position}
      onClick={props.onToggleOpen}
    >
    </Marker>
    {!props.showInfo ? props.bars.map(bar => <Marker
      key={bar.place_id}
      position={{lat: bar.lat, lng: bar.lng}}
      onClick={()=> props.toggleInfo(bar.id)}/>) :
    props.bars.filter(bar => bar.id === props.currentBar).map(bar => <Marker
      icon={{ url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png' }}
      position={{lat: bar.lat, lng: bar.lng}}/>)}
  </GoogleMap>)}
);
