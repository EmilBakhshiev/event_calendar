import React, { FC, ReactNode }  from 'react';
import {Login} from '../pages/Login'
import {Calendar} from '../pages/Calendar'


export interface IRoute {
  path: string;
  component: React.ComponentType ;
}

export enum RoutesNames {
    LOGIN = '/login',
    CALENDAR = '/'
}

export const privateRoutes: IRoute[] = [
    {path: RoutesNames.CALENDAR, component: Calendar }
];

export const publicRoutes: IRoute[] = [
{path: RoutesNames.LOGIN, component: Login}
];