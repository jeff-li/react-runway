import React from 'react';
import { Row, Col } from 'antd';
import './landing-content.scss';

const LandingContent = () => (
  <div className="landing-content-wrapper">
    <div className="content">
      <div className="title-wrapper">
        <h1 name="title">
          <span>Technology Stack</span>
        </h1>
      </div>
      <Row className="content-block-wrapper">
        <Col xs={24} md={6} className="content-block">
          <div className="content-block-item">
            <div className="content-block-icon">
              <img alt="" src="https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*CTp8T7RT-VkAAAAAAAAAAABkARQnAQ" />
            </div>
            <div className="content-block-title">Title one</div>
            <div className="content-block-description">Description One</div>
          </div>
        </Col>
        <Col xs={24} md={6} className="content-block">
          <div className="content-block-item">
            <div className="content-block-icon">
              <img alt="" src="https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*CTp8T7RT-VkAAAAAAAAAAABkARQnAQ" />
            </div>
            <div className="content-block-title">Title one</div>
            <div className="content-block-description">Description One</div>
          </div>
        </Col>
        <Col xs={24} md={6} className="content-block">
          <div className="content-block-item">
            <div className="content-block-icon">
              <img alt="" src="https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*CTp8T7RT-VkAAAAAAAAAAABkARQnAQ" />
            </div>
            <div className="content-block-title">Title one</div>
            <div className="content-block-description">Description One</div>
          </div>
        </Col>
        <Col xs={24} md={6} className="content-block">
          <div className="content-block-item">
            <div className="content-block-icon">
              <img alt="" src="https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*CTp8T7RT-VkAAAAAAAAAAABkARQnAQ" />
            </div>
            <div className="content-block-title">Title one</div>
            <div className="content-block-description">Description One</div>
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default LandingContent;
