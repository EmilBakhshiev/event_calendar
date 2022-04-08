import React, { FC } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { privateRoutes, publicRoutes, RoutesNames } from '../routes';

const AppRouter: FC = () => {

const {isAuth} = useTypeSelector((state) => state.authReducer)

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => {
        return (
          <Route key={route.path} path={route.path} element={<route.component />} />
        );
      })}
      <Route path={RoutesNames.LOGIN} element={<Navigate replace to={RoutesNames.CALENDAR} />} />
 
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => {
        return (
          <Route key={route.path} path={route.path} element={<route.component />} />
        );
      })}
      <Route path={RoutesNames.CALENDAR} element={<Navigate replace to={RoutesNames.LOGIN} />} />
    </Routes>
  );
};

export default AppRouter;
