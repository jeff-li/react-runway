import React, { useContext } from 'react';
import { Link, useLocation, useHistory, Redirect } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Row, message, Typography } from 'antd';
import { auth } from '../../firebase';
import UserContext from '../../contexts/UserContext';

const { Title } = Typography;

const ForgotPassword = () => {
  const { currentUser } = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };

  const sendReset = async (values) => {
    const { email } = values;
    try {
      await auth.sendPasswordResetEmail(email);
      message.success('An email has been sent to you');
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
          onFinish={sendReset}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Reset Password
            </Button>
          </Form.Item>
        </Form>
        <p type="flex" align="middle">
          <Link to="/login">
            back to sign in page
          </Link>
        </p>
      </div>
    </Row>
  );
};

export default ForgotPassword;
