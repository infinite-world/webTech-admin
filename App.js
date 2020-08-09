import React from "react";
import "./App.css";
import "./style.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Signup from "./components/signup/Signup";
import Admin from "./components/admin/Admin";
import UserTable from "./components/admin/usertable/UserTable";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/admin" component={Admin} />
        <Route path="/usertable" component={UserTable} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
