import { Menu, Row } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAction } from '../hooks/useAction';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { RoutesNames } from '../routes';

const NavBar: FC = () => {
  const navigate = useNavigate();
  const { isAuth, user } = useTypeSelector((state) => state.authReducer);
  const { logout } = useAction();

  return (
    <Header>
      <Row justify='end'>
        {isAuth ? (
          <>
            <div style={{ color: 'white', marginRight: '10px' }}>{user.username}</div>
            <Menu theme='dark' mode='horizontal' selectable={false}>
              <Menu.Item onClick={() => logout()}>Logout</Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme='dark' mode='horizontal' selectable={false}>
            <Menu.Item onClick={() => navigate(RoutesNames.LOGIN)}>
              Login
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Header>
  );
};

export default NavBar;
