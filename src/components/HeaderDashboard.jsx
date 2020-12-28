import React from 'react';
import { Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import { FaCogs } from 'react-icons/fa';
import { GoogleLogout } from 'react-google-login';

export default function HeaderDashboard(props){

  return (
    <Navbar color="primary" light expand="md">
      <NavbarBrand><FaCogs color="white"/><span className="text-white"><strong> Dashboard:</strong> {sessionStorage.getItem('name')}</span></NavbarBrand>
      <Collapse navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="#" onClick={() => props.onShow(1)}><span className="text-white">Todos los Posts</span></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={() => props.onShow(2)}><span className="text-white">Mis Posts</span></NavLink>
          </NavItem>
          <NavItem>
            <GoogleLogout
              clientId="654966311312-8770o12ejcc7ml1qdl685is8vr6rsu9r.apps.googleusercontent.com"
              buttonText="Logout"
              theme='dark'
              onLogoutSuccess={props.onLogout}
            />
          </NavItem>
        </Nav>
      </Collapse>
  </Navbar>
  );
}