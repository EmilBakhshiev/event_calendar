import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import { Moment } from 'moment';
import React, { FC, useState } from 'react';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { IEvent } from '../types/IEvent';
import { IUser } from '../types/IUser';
import { formatDate } from '../utils/date';
import { rules } from '../utils/rules';

export interface EventFormProps {
  guests: IUser[];
  submit: (event: IEvent) => void;
}

const EventForm: FC<EventFormProps> = ({ guests, submit }) => {
  const [event, setEvent] = useState<IEvent>({
    author: '',
    description: '',
    date: '',
    guest: '',
  } as IEvent);

  const { user } = useTypeSelector((state) => state.authReducer);

  const selectDate = (date: Moment | null) => {
    if (date) {
      setEvent({ ...event, date: formatDate(date.toDate()) });
    }
  };
  const submitForm = () => {
    submit({ ...event, author: user.username });
  };

  return (
    <Form onFinish={submitForm}>
      <Form.Item
        label='Event description'
        name='description'
        rules={[rules.required()]}
      >
        <Input
          value={event.description}
          onChange={(e) => setEvent({ ...event, description: e.target.value })}
        />
      </Form.Item>

      <Form.Item
        label='Event date'
        name='date'
        rules={[rules.required(), rules.isDateAfter('Событие в прошлом')]}
      >
        <DatePicker onChange={(date) => selectDate(date)} />
      </Form.Item>

      <Form.Item label='Guest' name='guest' rules={[rules.required()]}>
        <Select onChange={(guest: string) => setEvent({ ...event, guest })}>
          {guests.map((guest) => (
            <Select.Option key={guest.username} value={guest.username}>
              {guest.username}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Row justify='end'>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Create
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};

export default EventForm;
