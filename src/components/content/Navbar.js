import React from 'react';
import { Button, Collapse } from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Navr({ toggle }) {
  return (
    <nav className="navbarTop shadow-sm p-3 mb-5 bg-white rounded">
      <Button variantColor="green" onClick={toggle}>
        <i className="ion-android-menu" />
      </Button>
      <Collapse isOpen>
        <nav className="ml-auto">
          <Link to="/page-1">page 1</Link>
        </nav>
      </Collapse>
    </nav>
  );
}

Navr.propTypes = {
  toggle: PropTypes.func.isRequired,
};
