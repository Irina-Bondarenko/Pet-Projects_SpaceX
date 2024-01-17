import React, { ComponentType } from "react";
import { Route } from "react-router-dom";

interface AppRoute {
  path: string;
  component: ComponentType<any>;
  key: string;
}

export const getAppRoutes = (routes: AppRoute[]): React.ReactNode[] =>
  routes.map((route) => (
    <Route
      key={route.key}
      path={route.path}
      element={React.createElement(route.component)}
    />
  ));
