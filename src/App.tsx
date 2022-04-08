import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import 'antd/dist/antd.css'

const App: React.FC = () => {
  return (
    <Layout>
      <NavBar />
      <Content>
        <AppRouter />
      </Content>
    </Layout>
  );
};

export default App;
