import { Form, Input, Button, Checkbox } from 'antd';
import { FC } from 'react';
import { REQUIRED_INPUT_RULE } from '../utils/constant';
import { rules } from '../utils/rules';

const AuthForm: FC = () => {
    const handleSubmit = () =>{
console.log('submit');

    }
  return (
    <Form
    onFinish={handleSubmit}
    >
      <Form.Item
        label="Имя пользователя"
        name="username"
        rules={[rules.required(REQUIRED_INPUT_RULE)]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required(REQUIRED_INPUT_RULE)]}
      >
        <Input.Password />
      </Form.Item>


      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default AuthForm
