import React from 'react';
import Menu from 'antd/lib/menu';
import './landing-nav.scss';

const Header = () => {
  return (
    <div className="nav">
      <div className="nav-logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" className="nav-menu-item">nav 1</Menu.Item>
        <Menu.Item key="2" className="nav-menu-item">nav 2</Menu.Item>
        <Menu.Item key="3" className="nav-menu-item">nav 3</Menu.Item>
      </Menu>
    </div>
  //   <div className="home-page">
  //   <div className="header0-logo">
  //     <img width="100%" src='https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg' alt="img" />
  //   </div>
  //   <div className="header0-menu">
  //     <Menu
  //       mode='horizontal'
  //       defaultSelectedKeys={['sub0']}
  //       theme="dark"
  //     >
  //       <Item key="item0">
  //         hello
  //       </Item>
  //     </Menu>
  //   </div>
  // </div>
  );
};

export default Header;
