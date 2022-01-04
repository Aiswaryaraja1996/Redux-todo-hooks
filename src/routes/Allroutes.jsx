import { Switch, Route } from "react-router-dom";

import Login from "../login/Login";
import Todo from "../todo/Todo";
import Privateroute from "./Privateroute";
import TodoEdit from "../todo/TodoEdit";

function Allroutes() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/todo/:id">
          <TodoEdit/>
      </Route>
        <Privateroute exact path="/todo">
          <Todo />
        </Privateroute>
      </Switch>
    </>
  );
}

export default Allroutes;
