import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';

const LandingContent = () => (
  <LandingContentWrapper>
    <TitleWrapper>
      <Title>
        <span>Technology Stack</span>
      </Title>
    </TitleWrapper>
    <ContentRow>
      <ContentCol xs={24} md={6}>
        <BlockIcon>
          <img alt="" src="https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*CTp8T7RT-VkAAAAAAAAAAABkARQnAQ" />
        </BlockIcon>
        <BlockTitle>Title one</BlockTitle>
        <div className="content-block-description">Description One</div>
      </ContentCol>
      <ContentCol xs={24} md={6}>
        <BlockIcon>
          <img alt="" src="https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*CTp8T7RT-VkAAAAAAAAAAABkARQnAQ" />
        </BlockIcon>
        <BlockTitle>Title one</BlockTitle>
        <div className="content-block-description">Description One</div>
      </ContentCol>
      <ContentCol xs={24} md={6}>
        <BlockIcon>
          <img alt="" src="https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*CTp8T7RT-VkAAAAAAAAAAABkARQnAQ" />
        </BlockIcon>
        <BlockTitle>Title one</BlockTitle>
        <div className="content-block-description">Description One</div>
      </ContentCol>
      <ContentCol xs={24} md={6}>
        <BlockIcon>
          <img alt="" src="https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*CTp8T7RT-VkAAAAAAAAAAABkARQnAQ" />
        </BlockIcon>
        <BlockTitle>Title one</BlockTitle>
        <div className="content-block-description">Description One</div>
      </ContentCol>
    </ContentRow>
  </LandingContentWrapper>
);

export default LandingContent;

const LandingContentWrapper = styled.div`
  min-height: 446px;
  overflow: hidden;
  width: 100%;
  position: relative;
  height: 100%;
  padding: 64px 24px;
  max-width: 1200px;
  position: relative;
  margin: auto;
  will-change: transform;
`;

const TitleWrapper = styled.div`
  margin: 0 auto 48px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #314659;
  margin-bottom: 16px;
`;

const ContentRow = styled(Row)`
  position: relative;
  height: 100%;
  top: 25%;
  padding: 20px 0;
`;

const ContentCol = styled(Col)`
  padding: 0 4%;
  display: inline-block;
  text-align: center;
  min-height: 200px;
  margin-bottom: 24px;
  min-height: 340px;
  padding: 24px;
  transition: box-shadow 0.45s ease 0s;
  opacity: 1;
  transform: translate(0px, 0px);

  &:hover {
    box-shadow: 0px 11px 56px rgba(100, 100, 136, 0.15);
  }
`;

const BlockIcon = styled.div`
  width: 190px;
  height: 190px;
  font-size: 18px;
  margin: auto;
`;

const BlockTitle = styled.div`
  font-size: 18px;
  line-height: 32px;
  margin: 10px auto;
  color: rgba(0,0,0,.85);
  font-weight: 500;
  padding: 0;
`;
