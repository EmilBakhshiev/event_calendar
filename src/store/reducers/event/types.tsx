import { type } from 'os';
import { IEvent } from '../../../types/IEvent';
import { IUser } from '../../../types/IUser';

export interface EventState {
  guests: IUser[];
  events: IEvent[];
}

export enum EventActionEnum {
  SET_GUEST = 'SET_GUEST',
  SET_EVENTS = 'SET_EVENTS',
}

export interface SetEventsAction {
  type: EventActionEnum.SET_EVENTS;
  payload: IEvent[];
}
export interface SetGuestAction {
  type: EventActionEnum.SET_GUEST;
  payload: IUser[];
}

export type EventAction = SetEventsAction | SetGuestAction;
