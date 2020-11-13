import React from 'react';

import { Button } from './styles';

function Btn(props) {
  return (
      <Button onClick={props.onClick}>
          {props.label}
      </Button>
  );
}

export default Btn;