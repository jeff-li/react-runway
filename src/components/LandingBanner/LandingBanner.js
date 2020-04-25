import React from 'react';
import Button from 'antd/lib/button';
import styled from 'styled-components';

const Banner = () => {
  return (
    <LandingBanner>
      <BannerTextWrapper>
        <BannerTitle> React Starter Pack </BannerTitle>
        <BannerContent> Quick start with Ant Design 4 </BannerContent>
        <BannerButton ghost key="button"> Explore </BannerButton>
      </BannerTextWrapper>
    </LandingBanner>
  );
};

export default Banner;

const LandingBanner = styled.div`
  width: 100%;
  height: 80vh;
  position: relative;
  text-align: center;
  border-color: #666;
  background-image: url("https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
`;

const BannerTextWrapper = styled.div`
  display: inline-block;
  position: absolute;
  top: 20%;
  margin: auto;
  left: 0;
  right: 0;
  font-size: 14px;
  color: white;
  width: 550px;
`;

const BannerTitle = styled.div`
  width: 350px;
  left: 30px;
  min-height: 60px;
  margin: auto;
  display: inline-block;
  font-size: 40px;
  position: relative;
`;

const BannerContent = styled.div`
  margin-bottom: 20px;
  word-wrap: break-word;
  min-height: 24px;
`;

const BannerButton = styled(Button)`
  border: 1px solid #fff;
  color: #fff;
  background: transparent;
  box-shadow: 0 0 0 transparent;
  font-size: 16px;
  height: 40px;
  transition: background .45s ease-out, box-shadow .45s ease-out;

  &:hover {
    color: #fff;
    border-color: #fff;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 10px rgba(50, 250, 255, 0.75);
  }
  &:focus {
    color: #fff;
    border-color: #fff;
  }
  &.queue-anim-leaving {
    width: auto;
  }
`;
