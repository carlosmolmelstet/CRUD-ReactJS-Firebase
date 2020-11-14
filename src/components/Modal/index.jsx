import React from 'react';

import {
  Container,
  Wrapper 
} from './styles';

function Modal(props) {
  return (
     <Container id="modal">
       <Wrapper>
          <h1>{props.label}</h1>
         {props.children}
       </Wrapper>
     </Container>
  );
}

export default Modal;