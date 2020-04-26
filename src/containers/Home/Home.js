import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import HomeMenu from '../../components/HomeMenu';
import UserContext from '../../contexts/UserContext';
import { auth, firestore } from '../../firebase';

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
  const history = useHistory();
  const { currentUser } = useContext(UserContext);

  const [collapsed, setCollapsed] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    firestore.collection('users').get().then((data) => {
      setUsers(data.docs.map(doc => doc.data()));
    });
  }, []);

  const onCollapse = (isCollapsed) => {
    setCollapsed(isCollapsed);
  };

  const addNewCollection = () => {
    firestore.collection('users').add({
      'name': 'Test'
    }).then(docRef => {
      console.log(docRef)
    }).catch(err => {
      console.log(err)
    })
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
        <Header>
          <Menu theme="dark" mode="horizontal" onClick={signOut}>
            <MenuItem key="1">Sign Out</MenuItem>
          </Menu>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <div>
            Email:
            { currentUser.email }
          </div>
          <div>
            { users.map(user => user.name) }
          </div>
          <div>
            <button onClick={addNewCollection}>Add a new document</button>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
