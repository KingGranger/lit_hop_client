import React, {Component} from 'react';
import {withGoogleMap, GoogleMap, Marker, withScriptjs, DirectionsRenderer} from 'react-google-maps'
import { compose, withProps, withStateHandlers,lifecycle} from 'recompose';
/* global google */


export const JourneyMap = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCQh-ANCsLGqwp1ETq1eSj55pUo0Rd48dg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `500px` }} />,
    mapElement: <div style={{ height: `100%`, width: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();
      let currentLat = this.props.trips[0].lat
      let currentLng = this.props.trips[0].lng
      let nextLat = this.props.trips[1].lat
      let nextLng = this.props.trips[1].lng
      DirectionsService.route({
        origin: new google.maps.LatLng(currentLat, currentLng),
        destination: new google.maps.LatLng(nextLat, nextLng),
        travelMode: google.maps.TravelMode.TRANSIT,
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
    },componentDidUpdate() {
      console.log('called')
      const DirectionsService = new google.maps.DirectionsService();
      let currentLat = this.props.trips[0].lat
      let currentLng = this.props.trips[0].lng
      let nextLat = this.props.trips[1].lat
      let nextLng = this.props.trips[1].lng
      DirectionsService.route({
        origin: new google.maps.LatLng(currentLat, currentLng),
        destination: new google.maps.LatLng(nextLat, nextLng),
        travelMode: google.maps.TravelMode.TRANSIT,
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
    }
  })
)(props =>
  <GoogleMap
    defaultZoom={7}
    defaultCenter={{lat: 0, lng: 0}}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
);
