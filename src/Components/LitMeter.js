import React from 'react';
import { Progress, Segment } from 'semantic-ui-react';

const LitMeter = () => {

  return(
    <Segment >
      <Progress  percent={45} progress>Lit Meter</Progress>
    </Segment>
  )
};

export default LitMeter
