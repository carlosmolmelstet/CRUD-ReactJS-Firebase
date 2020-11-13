import React from 'react';

import { Container } from './styles';

function Input(props) {
  return (
      <Container>
          <h5 className="label">{props.label}</h5>
          <input id={props.id} name={props.name} onChange={props.onChange} value={props.value} placeholder={props.placeholder} type="text"/>
      </Container>
  );
}

export default Input;