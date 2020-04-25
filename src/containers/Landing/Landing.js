import React from 'react';
import Layout from 'antd/lib/layout';
import styled from 'styled-components';
import LandingNav from '../../components/LandingNav';
import LandingBanner from '../../components/LandingBanner';
import LandingContent from '../../components/LandingContent';
import LandingFooter from '../../components/LandingFooter';

const { Header, Footer, Content } = Layout;

const StyledFooter = styled(Footer)`
  text-align: center;
  padding: 0;
`;

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
      <StyledFooter>
        <LandingFooter id="landing-footer" key="Footer1_0" />
      </StyledFooter>
    </Layout>
  </div>
);

export default Landing;
