import { Layout, Row } from 'antd';
import React from 'react';
import AuthForm from '../components/AuthForm';

export const Login: React.FC = () => {
  return (
    <Layout>
      <Row justify='center' align='middle' className='auth-section'>
        <AuthForm />
      </Row>
    </Layout>
  );
};
