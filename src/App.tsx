import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { useEffect } from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import 'antd/dist/antd.css';
import { useAction } from './hooks/useAction';
import { IUser } from './types/IUser';

const App: React.FC = () => {
  const { setIsAuth, setUser } = useAction();
  useEffect(() => {
    const auth = localStorage.getItem('auth');
    const userInStorage = localStorage.getItem('username' || '');

    if (auth) {
      setUser({ username: userInStorage } as IUser);
      setIsAuth(true);
    }
  }, []);
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
