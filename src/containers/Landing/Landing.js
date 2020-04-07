import React from 'react';
import Layout from 'antd/lib/layout';
import LandingNav from '../../components/LandingNav';
import LandingBanner from '../../components/LandingBanner';
import LandingContent from '../../components/LandingContent';
import LandingFooter from '../../components/LandingFooter';
import './landing.scss';

const { Header, Footer, Sider, Content } = Layout;

const Landing = () => (
  <div>
    <Layout className="layout">
      <Header>
        <LandingNav id="landing-nav" />
      </Header>
      <Content>
        <LandingBanner id="landing-banner" key="Banner0_1" />
        <LandingContent id="landing-content" />
      </Content>
      <Footer style={{ textAlign: 'center' }} className="footer">
        <LandingFooter id="landing-footer" key="Footer1_0" />
      </Footer>
    </Layout>
  </div>
);

export default Landing;
