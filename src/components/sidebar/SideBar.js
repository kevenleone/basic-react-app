import React from 'react';
import { NavItem, NavLink, Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './SideBar.scss';

const SideBar = ({ isOpen, routes }) => (
  <div className={classNames('sidebar', { 'is-open': isOpen })}>
    <div className="sidebar-header">
      <h3>Your App Name</h3>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <p className="user">Welcome, User</p>
        { routes.map(({ path, name, icon }) => (
          <NavItem key={name}>
            <NavLink tag={Link} to={path}>
              <div className="ionicon sideicon">
                <i className={icon} />
              </div>
              <div className="rname">
                <span>{name}</span>
              </div>
            </NavLink>
          </NavItem>
        ))}
      </Nav>
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
