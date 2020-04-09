import React from 'react';
import Button from 'antd/lib/button';
import './landing-banner.scss';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-text-wrapper">
        <div className="banner-title">
          React Starter Pack
        </div>
        <div className="banner-content">
          Quick start with Ant Design 4
        </div>
        <Button ghost key="button" className="banner-button">
          Explore
        </Button>
      </div>
    </div>
  );
}
export default Banner;
