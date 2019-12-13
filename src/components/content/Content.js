import React from 'react';
import classNames from 'classnames';
import { Grid } from '@chakra-ui/core';
import { Route } from 'react-router-dom';

import PropTypes from 'prop-types';
import NavBar from './Navbar';


export default function Content(props) {
  const { toggle, isOpen, routes } = props;
  return (
    <div fluid className={classNames('content', { 'is-open': isOpen })}>
      <NavBar toggle={toggle} />
      <Grid mt={5} gap={12}>
        { routes.map(({ path, component }) => (
          <Route key={path} exact path={path} component={component} />
        ))}
      </Grid>
    </div>
  );
}

Content.propTypes = {
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  routes: PropTypes.objectOf(PropTypes.array),
};

Content.defaultProps = {
  routes: [],
};
