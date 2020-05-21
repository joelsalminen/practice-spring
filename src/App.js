import React from "react";
import "./App.css";
// import Card from "./Card";
import Login from "./Login";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      {/* <Card /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
};

export default App;
