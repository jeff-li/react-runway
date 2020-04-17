import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import { Form, Input, Button, message, Row } from 'antd';

const SignUp = () => {
  const [error, setError] = useState('');
  const history = useHistory();

  const createUserWithEmailAndPasswordHandler = async (values) => {
    const { email, password, confirmPassword } = values;
    if (password === confirmPassword) {
      try {
        await auth.createUserWithEmailAndPassword(email, password);
        history.push('/home');
      } catch (err) {
        setError(err.message);
        message.error(error);
      }
    }
    // auth.createUserWithEmailAndPassword()
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row type="flex" justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <div>
        <Form
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 12 }}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={createUserWithEmailAndPasswordHandler}
          onFinishFailed={onFinishFailed}
          scrollToFirstError
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please provide a email address.' }]}
          >
            <Input type="email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            min={6}
            rules={[
              { required: true, message: 'Please input your password.' },
              { min: 5, message: 'Password must be minimum 6 characters.' },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={['password']}
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('The two passwords that you entered do not match!');
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
        <p type="flex" align="middle">
          Already have an account?
          {' '}
          <Link to="/login">
            Sign in here
          </Link>
        </p>

      </div>
    </Row>
  );
};
export default SignUp;
