import React, { useContext } from 'react';
import {
  Link, useLocation, useNavigate, Navigate,
} from 'react-router-dom';
import {
  Form, Input, Button, Checkbox, Row, message,
} from 'antd';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import UserContext from '../../contexts/UserContext';

const Login = () => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };

  const login = async (values) => {
    const { email, password } = values;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        message.error(errorMessage);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  if (currentUser) {
    return <Navigate to="/home" />;
  }

  return (
    <Row type="flex" justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <div>
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={login}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Email"
            name="email"
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
        <p type="flex" align="middle">
          New user?
          {' '}
          <Link to="/signup">
            Sign up here
          </Link>
          <br />
          {' '}
          <Link to="/forgot-password">
            Forgot Password?
          </Link>
        </p>
      </div>
    </Row>
  );
};

export default Login;
