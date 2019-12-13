import React, { useState } from 'react';
import SideBar from './components/sidebar/SideBar';
import Content from './components/content/Content';
import Dashboard from './pages/Dashboard';
import Clients from './pages/Clients';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'ion-ios-analytics',
    component: Dashboard,
    showSidebar: true,
    permission: ['Manager'],
  },
  {
    path: '/clients',
    name: 'Clients',
    icon: 'ion-ios-analytics',
    component: Clients,
    showSidebar: true,
    permission: ['Manager'],
  },
];

export default () => {
  const [isOpen, setOpen] = useState(true);
  const toggle = () => setOpen(!isOpen);

  return (
    <div className="App wrapper">
      <SideBar routes={routes} toggle={toggle} isOpen={isOpen} />
      <Content routes={routes} toggle={toggle} isOpen={isOpen} />
    </div>
  );
};
