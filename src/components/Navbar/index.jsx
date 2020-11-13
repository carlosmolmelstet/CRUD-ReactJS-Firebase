import React from 'react';

import {Link} from 'react-router-dom';

import { Nav, Logo } from './styles';

function Navbar() {
  return (
      <Nav>
          <Logo>
              <Link to="/">
                <h1>MYCRUD</h1>
              </Link>
          </Logo>
      </Nav>
  );
}

export default Navbar;