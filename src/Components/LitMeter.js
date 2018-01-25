import React from 'react';
import { Progress, Segment } from 'semantic-ui-react';

const LitMeter = () => {

  return(
    <Segment inverted>
      <Progress percent={29} inverted color='pink' progress />
    </Segment>
  )
};

export default LitMeter
