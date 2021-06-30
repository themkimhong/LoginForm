import { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  RouteProps,
} from "react-router-dom";
import LoginPage from "../pages/login.page";
import { PATH_ENUM } from "./path";
import Homepage from "../pages/home.page";
import DashboardPage from "../pages/dashboard";

const routlist: RouteProps[] = [
  { children: <LoginPage />, path: PATH_ENUM.LOGIN, exact: true },
  { children: <Homepage />, path: PATH_ENUM.HOME, exact: true },
  { children: <DashboardPage />, path: PATH_ENUM.DASHBOARD, exact: true },
];

export const RouteView = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          {routlist.map((data) => {
            return (
              <Route
                children={data.children}
                path={data.path}
                exact={data.exact}
              />
            );
          })}
        </Switch>
      </Router>
    </Fragment>
  );
};
