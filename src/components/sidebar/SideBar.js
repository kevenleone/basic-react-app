import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { List, ListItem, ListIcon } from '@chakra-ui/core';

import './SideBar.scss';

const SideBar = ({ isOpen, routes }) => (
  <div className={classNames('sidebar', { 'is-open': isOpen })}>
    <div className="sidebar-header">
      <h3>Your App Name</h3>
    </div>
    <div className="side-menu">
      <nav vertical className="list-unstyled pb-3">
        <p className="user">Welcome, User</p>
        <List spacing={3} marginLeft={5} marginTop={5}>
          { routes.map(({ path, name }) => (
            <ListItem>
              <ListIcon icon="at-sign" color="green.500" />
              <Link to={path}>
                {name}
              </Link>
            </ListItem>
          ))}
        </List>

      </nav>
    </div>
  </div>
);

SideBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  routes: PropTypes.objectOf(PropTypes.array),
};

SideBar.defaultProps = {
  routes: [],
};


export default SideBar;
