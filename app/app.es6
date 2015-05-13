import React from "react";
import Router, {Route, DefaultRoute} from "react-router";
import Application from "./Application";
import Home from "./Home";
import Test from "./Test";

const routes = (
  <Route name="app" path="/" handler={Application} >
    <Route path='/test' handler={Test} />
    <DefaultRoute name="home" handler={Home} />
  </Route>
  );

const load = (routerState) => {
  return Promise.all(
    routerState.routes.filter((route) => {
      return route.handler.load;
    }).map((route) => {
      return route.handler.load(routerState.params);
    }));
};


Router.run(routes, (Handler, state) => {
  load(state).then(() => {
    React.render(
      <Handler {...state} />,
      document.getElementById("react-root")
      );
  });
});
