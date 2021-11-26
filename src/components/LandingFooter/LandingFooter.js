import React from 'react';
import styled from 'styled-components';

const LandingFooterWrapper = styled.div`
  background: #001529;
  overflow: hidden;
  position: relative;
  min-height: 120px;
  color: #999;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const CopyrightWrapper = styled.div`
  margin-top: 70px;
  padding-top: 10px;
  width: 100%;
  border-top: 1px solid rgba(233,233,233,.1);
`;

const Footer = () => (
  <LandingFooterWrapper>
    <CopyrightWrapper className="copyright-wrapper">
      <span> ©2020 by Jeff Li </span>
    </CopyrightWrapper>
  </LandingFooterWrapper>
);

export default Footer;
