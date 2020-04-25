import React from 'react';
import Menu from 'antd/lib/menu';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.div`
  z-index: 1;
  box-shadow: 0 5px 8px fade(#000, 15);
  position: relative;
  top: 0;
`;

const NavLogo = styled.button`
  position: relative;
  line-height: 64px;
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
`;

const MenuItem = styled(Menu.Item)`
  float: right;
`;

const Header = () => {
  return (
    <Nav className="nav">
      <NavLogo className="nav-logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <MenuItem key="" className="nav-menu-item">
          <span>Log in</span>
          <NavLink to="/home" />
        </MenuItem>
        <MenuItem key="1">nav 1</MenuItem>
        <MenuItem key="2">nav 2</MenuItem>
        <MenuItem key="3">nav 3</MenuItem>
      </Menu>
    </Nav>
  );
};

export default Header;
