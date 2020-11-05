import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "./routes";

const Routes = () => {
  return (
    <Switch>
      {routes.map(({ path, component }) => (
        <Route path={path} component={component} />
      ))}
    </Switch>
  );
};

export default Routes;
