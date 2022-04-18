import axios from 'axios';
import { AppDispatch } from '../..';
import UserService from '../../../api/UserService';
import { IEvent } from '../../../types/IEvent';
import { IUser } from '../../../types/IUser';
import { allActionCreators } from '../action-creators';
import { EventActionEnum, SetEventsAction, SetGuestAction } from './types';

export const EventActionCreators = {
  setGuest: (payload: IUser[]): SetGuestAction => ({
    type: EventActionEnum.SET_GUEST,
    payload,
  }),
  setEvents: (payload: IEvent[]): SetEventsAction => ({
    type: EventActionEnum.SET_EVENTS,
    payload,
  }),
  fetchGuest: () => async (dispatch: AppDispatch) => {
    try {
      const response = await UserService.getUsers();
      dispatch(EventActionCreators.setGuest(response.data));
    } catch (error) {
      console.log(error);
    }
  },
  createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem('events') || '[]';
      const json = JSON.parse(events) as IEvent[];
      json.push(event);
      dispatch(EventActionCreators.setEvents(json));
      localStorage.setItem('events', JSON.stringify(json));
    } catch (error) {
      console.log(error);
    }
  },
  fetchEvent: (userName: string) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem('events') || '[]';
      const json = JSON.parse(events) as IEvent[];
      const currentUserEvents = json.filter(
        (ev) => ev.author === userName || ev.guest === userName
      );
      dispatch(EventActionCreators.setEvents(currentUserEvents));
    } catch (error) {
      console.log(error);
    }
  },
};
