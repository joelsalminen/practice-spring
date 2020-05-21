import React from "react";
import "./App.css";
import Login from "./Login";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
};

export default App;
