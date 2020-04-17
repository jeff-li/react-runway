import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import HomeMenu from '../../components/HomeMenu';
import { auth } from '../../firebase';
import './home.scss';

const { Header, Sider, Content, Footer } = Layout;

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
        <div className="logo" />
        <HomeMenu />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Menu theme="dark" mode="horizontal" onClick={signOut}>
            <Menu.Item key="1" className="nav-menu-item">Sign Out</Menu.Item>
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
