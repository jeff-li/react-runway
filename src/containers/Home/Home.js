import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import HomeMenu from '../../components/HomeMenu';
import { auth } from '../../firebase';

const { Header, Sider, Content, Footer } = Layout;

const MenuItem = styled(Menu.Item)`
  float: right;
`;

const NavLogo = styled.div`
  position: relative;
  line-height: 64px;
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
`;

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const history = useHistory();

  const onCollapse = (isCollapsed) => {
    setCollapsed(isCollapsed);
  };

  const signOut = async () => {
    try {
      await auth.signOut();
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };
  

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <NavLogo />
        <HomeMenu />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Menu theme="dark" mode="horizontal" onClick={signOut}>
            <MenuItem key="1">Sign Out</MenuItem>
          </Menu>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
