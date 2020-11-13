import React from 'react';

import { Container } from './styles';

function Textarea(props) {
  return (
      <Container>
          <h5 className="label">{props.label}</h5>
          <textarea id={props.id} onChange={props.onChange} name={props.name} placeholder={props.placeholder} value={props.value} type="text"/>
      </Container>
  );
}

export default Textarea;