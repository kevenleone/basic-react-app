import React, { useState } from 'react';
import { Collapse, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SubMenu = ({ icon, title, items }) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <NavItem onClick={toggleNavbar} className={classNames({ 'menu-open': !collapsed })}>
        <NavLink className="dropdown-toggle">
          <FontAwesomeIcon icon={icon} className="mr-2" />
          {title}
        </NavLink>
      </NavItem>
      <Collapse isOpen={!collapsed} navbar className={classNames('items-menu', { 'mb-1': !collapsed })}>
        {items.map((item) => (
          <NavItem key={item.title} className="pl-4">
            <NavLink tag={Link} to={item.target}>
              {item.title}
            </NavLink>
          </NavItem>
        ))}
      </Collapse>
    </div>
  );
};

SubMenu.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  items: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default SubMenu;
