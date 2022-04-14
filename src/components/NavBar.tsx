import { Menu, Row } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { RoutesNames } from '../routes';
import { AuthActionCreators } from '../store/reducers/auth/action-creators';

const NavBar: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth, user } = useTypeSelector((state) => state.authReducer);

  return (
    <Header>
      <Row justify='end'>
        {isAuth ? (
          <>
            <div style={{ color: 'white' }}>{user.username}</div>
            <Menu theme='dark' mode='horizontal' selectable={false}>
              <Menu.Item onClick={() => dispatch(AuthActionCreators.logout())}>
                Выйти
              </Menu.Item>
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
