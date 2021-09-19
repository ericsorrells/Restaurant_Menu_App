// ========================================================================
/* External */
import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
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
        <CreateMenuItem/>
      </Route>
    </Switch>
  </Router>
);

export default AppRouter;

{/* <Router history={history}>
  <div className="App">
    <Header />
    <Switch>
      <Route path="/" component={Home} exact={true} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/todo/:id" component={Todo} />
      <Route path="/create-todo" component={CreateTodo} />
      <Route path="/update-todo/:id" component={UpdateTodo} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  </div>
</Router> */}