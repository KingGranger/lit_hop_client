import React from 'react';
import { Progress, Segment } from 'semantic-ui-react';

const LitMeter = () => {

  return(
    <Segment >
      <Progress value='5' total='10' inverted size='medium' color='red' progress='percent'>Lit Meter</Progress>
    </Segment>
  )
};

export default LitMeter
