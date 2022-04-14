import { Form, Input, Button, Checkbox } from 'antd';
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAction } from '../hooks/useAction';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { REQUIRED_INPUT_RULE } from '../utils/constant';
import { rules } from '../utils/rules';

const AuthForm: FC = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAction();

  const { error, isLoading } = useTypeSelector((state) => state.authReducer);
  const handleSubmit = () => {
    login(userName, password);
  };
  return (
    <Form onFinish={handleSubmit}>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <Form.Item
        label='Имя пользователя'
        name='username'
        rules={[rules.required(REQUIRED_INPUT_RULE)]}
      >
        <Input value={userName} onChange={(e) => setUserName(e.target.value)} />
      </Form.Item>

      <Form.Item
        label='Пароль'
        name='password'
        rules={[rules.required(REQUIRED_INPUT_RULE)]}
      >
        <Input.Password
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type='primary' htmlType='submit' loading={isLoading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AuthForm;
