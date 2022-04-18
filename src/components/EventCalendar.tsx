import { Calendar } from 'antd';
import { Moment } from 'moment';
import React, { FC } from 'react';
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
      <div>
        {currentDayEvents.map((ev, index) => (
         <div key={index}>{ev.description}</div>
        ))}
      </div>
      /*       <ul className="events">
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul> */
    );
  }

  return <Calendar dateCellRender={dateCellRender} />;
};

export default EventCalendar;
