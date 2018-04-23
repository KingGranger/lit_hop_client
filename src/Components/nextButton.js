import React, { Component } from 'react';
import { Message, Button } from 'semantic-ui-react';

const NextButton = ({ next, trips }) => {
  return trips.length > 2 ? <Button onClick={()=> next()}>Go to next bar!</Button> : <Message floating>We hope you enjoyed your bar Hop! Get home safe</Message>
}

export default NextButton;
