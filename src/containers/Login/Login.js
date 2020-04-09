import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Row } from 'antd';
import fakeAuth from '../../utils/auth';

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };
  const login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row type="flex" justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={login}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </Row>
  );
};

export default Login;
