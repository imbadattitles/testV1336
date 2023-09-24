import React from "react";
import FirstPage from "../pages/FirstPage";
import SecondPage from "../pages/SecondPage";
export interface IRoute {
  path: string;
  component: React.ComponentType;
}

export enum RouteNames {
  FIRST = "/first",
  SECOND = "/second",
  ERROR = "/*",
}

export const routes: IRoute[] = [
  { path: RouteNames.FIRST, component: FirstPage },
  { path: RouteNames.SECOND, component: SecondPage },
  { path: RouteNames.ERROR, component: FirstPage },
];
