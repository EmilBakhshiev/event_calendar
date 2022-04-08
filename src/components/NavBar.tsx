import { Menu, Row } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { RoutesNames } from '../routes';

const NavBar: FC = () => {
  const navigate = useNavigate();
  const {isAuth} = useTypeSelector((state) => state.authReducer)

  return (
    <Header>
      <Row justify='end'>
        {isAuth ? (
          <>
            <div style={{ color: 'white' }}>ILhomTv</div>
            <Menu theme='dark' mode='horizontal' selectable={false}>
              <Menu.Item onClick={() => console.log('log')}>Выйти</Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme='dark' mode='horizontal' selectable={false}>
            <Menu.Item onClick={() => navigate(RoutesNames.LOGIN)}>
              Логин
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Header>
  );
};

export default NavBar;
