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
    defaultZoom={14}
    center={props.position}
  >
    <Marker
      position={props.position}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
      </InfoWindow>}
    </Marker>
  </GoogleMap>)}
);
