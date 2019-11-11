import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Navbar, Button, NavbarToggler, Collapse, Nav, NavItem, NavLink,
} from 'reactstrap';

export default function Navr({ toggle }) {
  const [isOpen, setOpen] = useState(true);
  const selfToggle = () => setOpen(!isOpen);

  return (
    <Navbar light className="navbar shadow-sm p-3 mb-5 bg-white rounded" expand="md">
      <Button color="secondary" onClick={toggle}>
        <i className="ion-android-menu" />
      </Button>
      <NavbarToggler onClick={selfToggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/page-1">page 1</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

Navr.propTypes = {
  toggle: PropTypes.func.isRequired,
};
