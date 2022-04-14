import { Card, Layout, Row } from 'antd';
import React from 'react';
import AuthForm from '../components/AuthForm';

export const Login: React.FC = () => {
  return (
    <Layout>
      <Row justify='center' align='middle' className='auth-section'>
        <Card>
          <AuthForm />
        </Card>
      </Row>
    </Layout>
  );
};
