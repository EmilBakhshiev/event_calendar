import { Button, Layout, Row } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { useEffect, useState } from 'react';
import EventCalendar from '../components/EventCalendar';
import EventForm from '../components/EventForm';
import { useAction } from '../hooks/useAction';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { IEvent } from '../types/IEvent';

export const Calendar: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { fetchGuest, createEvent, fetchEvent } = useAction();
  const { guests, events } = useTypeSelector((state) => state.evenrReducer);
  const { user } = useTypeSelector((state) => state.authReducer);

  useEffect(() => {
    fetchGuest();
    fetchEvent(user.username);
  }, []);

  const addNewEvent = (event: IEvent) => {
    setModalVisible(false);
    createEvent(event);
  };

  return (
    <Layout>
      <EventCalendar events={events} />
      <Row justify='center'>
        <Button onClick={() => setModalVisible(true)}>Add Event</Button>
      </Row>
      <Modal
        title='Add Event'
        visible={modalVisible}
        footer={null}
        onCancel={() => setModalVisible(false)}
      >
        <EventForm guests={guests} submit={addNewEvent} />
      </Modal>
    </Layout>
  );
};
