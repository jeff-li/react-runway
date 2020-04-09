import React from 'react';
import Menu from 'antd/lib/menu';
import { NavLink } from 'react-router-dom';
import './landing-nav.scss';

const Header = () => {
  return (
    <div className="nav">
      <div className="nav-logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="" className="nav-menu-item">
          <span>Log in</span>
          <NavLink to="/home" />
        </Menu.Item>
        <Menu.Item key="1" className="nav-menu-item">nav 1</Menu.Item>
        <Menu.Item key="2" className="nav-menu-item">nav 2</Menu.Item>
        <Menu.Item key="3" className="nav-menu-item">nav 3</Menu.Item>
      </Menu>
    </div>
  );
};

export default Header;
