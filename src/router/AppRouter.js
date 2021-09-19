// ========================================================================
/* External */
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";

/* Internal */
import CreateMenuItem from "../components/CreateMenuItem/CreateMenuItem";
import Nav from "../components/Nav/Nav";
import Menu from "../components/Menu/Menu";

// ========================================================================

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <Nav />
    <Switch>
      <Route path="/" component={Menu} exact={true} />
      <Route path="/create">
        <CreateMenuItem />
      </Route>
    </Switch>
  </Router>
);

export default AppRouter;
