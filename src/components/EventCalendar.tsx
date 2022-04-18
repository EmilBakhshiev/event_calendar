import { Badge, Calendar, List } from 'antd';

import { Moment } from 'moment';
import { FC } from 'react';
import { IEvent } from '../types/IEvent';
import { formatDate } from '../utils/date';

interface EventCalendarProps {
  events: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = ({ events }) => {
  
  function dateCellRender(value: Moment) {
    const formatedDate = formatDate(value.toDate());
    const currentDayEvents = events.filter((ev) => ev.date === formatedDate);
    return (
        <ul className='events'>
        {currentDayEvents.map((item, index) => (
          <li key={index}>
            <Badge status='success' text={item.description} />
          </li>
        ))}
      </ul> 
    );
  }

  return <Calendar dateCellRender={dateCellRender} />;
};

export default EventCalendar;
