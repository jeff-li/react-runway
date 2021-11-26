import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Layout from 'antd/lib/layout';
import {
  collection, query, getDocs, doc, setDoc,
} from 'firebase/firestore';

import Menu from 'antd/lib/menu';
import HomeMenu from '../../components/HomeMenu';
import UserContext from '../../contexts/UserContext';
import { auth, db } from '../../firebase';

const {
  Header, Sider, Content, Footer,
} = Layout;

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
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);

  const [collapsed, setCollapsed] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const q = query(collection(db, 'users'));
      const querySnapshot = await getDocs(q);
      setUsers(querySnapshot.docs.map((document) => document.data()));
    }
    fetchData();
  }, []);

  const onCollapse = (isCollapsed) => {
    setCollapsed(isCollapsed);
  };

  const addNewCollection = async () => {
    await setDoc(doc(db, 'cities', 'LA'), {
      name: 'Los Angeles',
      state: 'CA',
      country: 'USA',
    });
  };

  const signOut = async () => {
    try {
      await auth.signOut();
      navigate('/');
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
            { users.map((user) => user.name) }
          </div>
          <div>
            <button type="button" onClick={addNewCollection}>Add a new document</button>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
