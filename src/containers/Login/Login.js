import React, { useContext } from 'react';
import { Link, useLocation, useHistory, Redirect } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Row, message } from 'antd';
import { auth } from '../../firebase';
import UserContext from '../../contexts/UserContext';


const Login = () => {
  const { currentUser } = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };

  const login = async (values) => {
    const { email, password } = values;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      history.replace(from);
    } catch (err) {
      const errorMessage = err.message;
      message.error(errorMessage);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  if (currentUser) {
    return <Redirect to="/home" />;
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
          New User?
          <Link to="/signup">
            Sign up here
          </Link>
        </p>
      </div>
    </Row>
  );
};

export default Login;
